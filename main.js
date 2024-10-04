let db;
let firebaseAvailable = false;
let adminCommands = null;
let isElectron = false;

if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
  isElectron = true;
}


const terminal = document.getElementById("terminal");
const input = document.getElementById("input");

let terminalHistory = [];

// ##############################################################################################################################
//
//
//    Text/Styling
//
//
// ##############################################################################################################################

// Add styling for specific keywords in the input
function applyStylingToText(content) {
  return content.replace(/<\/?[^>]+>/g, match => match) 
    .replace(/\b(help|user|username|create|script|scripts|room|rooms|code|matrix|lookup|whoami|redacted|clear|brainstem|hunt|kyphxr|console|osint)\b/gi, 
      (match) => `<span class="${getTextColorClass(match)}">${match}</span>`);
}


function replaceEmotesWithImages(content) {
  return content.replace(/\b(Kappa|PogChamp|FeelsBadMan)\b/g, match => {
    if (emoteMap[match]) {
      return `<img src="${emoteMap[match]}" alt="${match}" class="emote">`;
    }
    return match; 
  });
}


function updateInputStyle() {
  const content = input.innerText;

  
  const styledContent = applyStylingToText(content);
  input.innerHTML = styledContent;

  
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(input);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

function getTextColorClass(keyword) {
  const colors = {
    help: 'red-text',
    user: 'orange-text',
    username: 'username-text',
    create: 'create-text',
    script: 'script-text',
    scripts: 'script-text',
    room: 'room-text',
    rooms: 'room-text',
    code: 'code-green',
    console: 'console-text',
    matrix: 'matrix-textc',
    lookup: 'lYellow-text',
    whoami: 'green-text',
    redacted: 'red-text',
    clear: 'green-text',
    brainstem: 'anomevo-text',
    hunt: 'red-text2',
	kyphxr: 'ky-text',
	osint: 'ti-text',
  };
  return colors[keyword.toLowerCase()] || '';
}


function updateInputStyle() {
  const content = input.innerText;

  
  const styledContent = applyStylingToText(content);
  input.innerHTML = styledContent;

  // Move the cursor to the end of the content
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(input);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

let storedUsername = null;


function sanitizeInput(input) {
  return input.replace(/\s+/g, ' ').trim();
}

const emoteMap = {
  'Kappa': 'https://static-cdn.jtvnw.net/emoticons/v1/25/1.0', 
  'PogChamp': 'https://static-cdn.jtvnw.net/emoticons/v1/88/1.0',
  'FeelsBadMan': 'https://cdn.betterttv.net/emote/566c9f25ef95803b25a3a120/1x', 
  'KEKW': 'https://cdn.betterttv.net/emote/5ea831f074046462f768097a/1x',
  'NOOO': 'https://cdn.betterttv.net/emote/5fd1610acbd462462d56cd7d/1x', 
  'LETSGOOO': 'https://cdn.betterttv.net/emote/5f7cd139ce8bc74a94247828/1x', 
  'POGSLIDE': 'https://cdn.betterttv.net/emote/5aea37908f767c42ce1e0293/1x',
  'hoSway': 'https://cdn.betterttv.net/emote/56396c857e538de14bd747a5/1x',
  'peepoG': 'https://cdn.betterttv.net/emote/5d63e543375afb1da9a68a5a/1x', 
  'catJAM': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x' 
};

// Replace emote codes with corresponding images
function replaceEmotesWithImages(content) {
  return content.replace(/\b(Kappa|PogChamp|FeelsBadMan|catJAM|KEKW|NOOO|LETSGOOO|POGSLIDE|hoSway|peepoG)\b/g, match => {
    if (emoteMap[match]) {
      return `<img src="${emoteMap[match]}" alt="${match}" class="emote">`; // Replace with emote image
    }
    return match;
  });
}

// Modify the applyStylingToText function to include emotes
function applyStylingToText(content) {
  content = content.replace(/<\/?[^>]+>/g, match => match);


  content = content.replace(/\b(help|user|username|create|script|scripts|room|rooms|code|matrix|lookup|whoami|redacted|clear|brainstem|hunt|kyphxr|console|osint)\b/gi, 
    (match) => `<span class="${getTextColorClass(match)}">${match}</span>`);
  return content;
}

// ##############################################################################################################################
//
//
//    Commands
//
//
// ##############################################################################################################################



// Process command and display in terminal
async function processCommand(command) {
  const response = await handleCommand(command);
  const formattedCommand = `> ${applyStylingToText(command)}<br/>`;
  const formattedResponse = `${applyStylingToText(response)}<br/>`;

  // Replace emote codes in the terminal output only
  const emoteCommand = replaceEmotesWithImages(formattedCommand);
  const emoteResponse = replaceEmotesWithImages(formattedResponse);

  terminal.innerHTML += emoteCommand + emoteResponse;
  terminalHistory.push(emoteCommand + emoteResponse);  // Store in history

  terminal.scrollTop = terminal.scrollHeight;
}

// Event listeners for input (No emotes in input)
input.addEventListener("input", updateInputStyle);
input.addEventListener("keydown", async function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    const command = input.innerText.trim();
    if (command) await processCommand(command);
    input.innerHTML = ""; // Clear input after processing
  }
});

// ##############################################################################################################################
//
//
//    Misc
//
//
// ##############################################################################################################################

// Clear the terminal
function clearTerminal() {
  terminal.innerHTML = "";
}

const executeAdminCommand = async (command) => {
  if (adminCommands && adminCommands[command]) {
    return await adminCommands[command]();
  } else {
    return "Command not recognized.";
  }
};

const adminCommandHandler = async (input) => {
  const output = await executeAdminCommand(input);
  console.log(output);  // Log the result of the command
};

function removeLastResponse() {
  if (terminalHistory.length > 0) {
    terminalHistory.pop(); // Remove the last response from history
    terminal.innerHTML = terminalHistory.join(''); // Update the terminal content
    return "Last response removed.";
  } else {
    return "No responses to remove.";
  }
}

const chat = {
  say: function (message) {
    // Get the div with the id "chat"
    const chatDiv = document.getElementById("chat");

    // If the div exists and the message is not empty
    if (chatDiv && message) {
      // Create a new paragraph or div element to display the message
      const newMessage = document.createElement("p");
      
      // Get the current timestamp
      const timestamp = new Date().toLocaleTimeString();  // Example: "3:15:27 PM"

      // Use the stored username, default to 'Guest' if no username is set
      const username = storedUsername ? storedUsername : "Guest";

      // Format the message with timestamp and username
      newMessage.innerHTML = `<span class="timestamp">[${timestamp}]</span> <span class="username">${username}:</span> ${message}`;
      
      // Append the new message to the chat div
      chatDiv.appendChild(newMessage);

      // Scroll to the bottom to show the latest message
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }
  }
};