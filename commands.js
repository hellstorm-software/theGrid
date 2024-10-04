async function handleCommand(command) {
  const sanitizedCommand = sanitizeInput(command);

  // Check if the command contains parentheses (like chat.say("message"))
  const parenthesisPattern = /^([a-zA-Z.]+)\(([^)]*)\)$/;
  const matches = sanitizedCommand.match(parenthesisPattern);
  
  let cmd, args;

  if (matches) {
    cmd = matches[1];  // The command (e.g., chat.say)
    args = [matches[2]];  // The content inside the parentheses (e.g., "message")
  } else {
    [cmd, ...args] = sanitizedCommand.split(' ');  // Fallback to regular splitting if no parentheses
  }

  // Check if the command is an admin command
  if (adminCommands && adminCommands[cmd]) {
    return adminCommands[cmd](...args);
  }
  
  // Handle combat command
  if (cmd.toLowerCase() === "fight") {
    return await combat(args.join(' '));
  }

  // Handle regular commands
  switch (cmd.toLowerCase()) {
    case "hello":
      return "hello, hacker!";
    case "status":
      return "All systems operational.";
    case "room":
      const roomNumber = parseInt(args, 10);
      return rooms && rooms[roomNumber] ? `Room ${roomNumber}: ${rooms[roomNumber]}` : `Room ${roomNumber} does not exist.`;
    case "hackmud":
      return `
        Hackmud is a hacking themed multi-user dungeon, and is the primary inspiration to this game. 
        Hackmud is a more PVP focused MMO, allowing real-time hacking between players. 
        Check out Hackmud <a style="color: green;" href="https://store.steampowered.com/app/469920/hackmud/" target="_blank">on steam!</a>
      `;
    case "register":
      return "Create a new user by typing user.Create [username] and replace '[username]' with your desired username.";
    case "matrix.tut":
      return tutorialMatrix;
    case "hoard":
      return `you have 1 Brainstem. Use hunt.brainstem to search for <i>Anomevos</i> to fight;`
    case "user-lookup.kyphxr":
      return kyphxrLookupResponse;
    case "chat.say":
      const message = args[0];  // Extract the message inside parentheses
      chat.say(message);  // Call the chat.say() function to print the message in the "chat" div
      return `Message sent: ${message}`;

    case "user-lookup.grimbeard":
      return grimbeardLookupResponse;
    case "help":
      return helpResponse;
    case "osint.pug":
      return pugResponseA;
    case "system.override()":
	  removeLastResponse();
      return pugResponseB;
    case "name.set(pyxie)":
	  removeLastResponse();
      return pugResponseC;
    case "clear":
      return emptyResponse;
    case "reset":
      clearTerminal();
      return resetHT;
    case "discord":
      return '<a class="discord-text" href="https://discord.gg/ykmdtZhSN3" target="_blank">https://discord.gg/ykmdtZhSN3</a>';
    case "kyphxr.console":
      return '<a class="discord-text" href="./kyphxrKonsole.html">switch consoles</a><br>';
    case "main.console":
      return '<a class="discord-text" href="./index.html">switch consoles</a><br>';
    case "user.create":
      storedUsername = args.join(' ');
      return `User created with username: ${storedUsername}. Type 'login' to begin. Type 'help' for assistance.`;
    case "whoami":
      return storedUsername ? `Current username: ${storedUsername}` : "No user is currently created.";
    case "login":
      return storedUsername ? `Logged in as: ${storedUsername}<br>Server status: operational.<br>Multiplayer status: OFFLINE.<br>${devMessage}` : "No user is currently created.";
    case "empty":
      clearTerminal();
      return "";
	case "matrix.on":
		document.getElementById('canv').style.display = 'block';
		return "Matrix effect turned on.";
	case "matrix.off":
		document.getElementById('canv').style.display = 'none';
		return "Matrix effect turned off.";
    default:
      return "Unknown command.";
  }
}