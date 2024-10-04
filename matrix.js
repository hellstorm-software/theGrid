const canvas = document.getElementById('canv');
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
const cols = Math.floor(w / 20) + 1; 
const ypos = Array(cols).fill(0); 

ctx.fillStyle = '#000'; 
ctx.fillRect(0, 0, w, h);

function matrix() {
  ctx.fillStyle = '#0001'; // fading effect
  ctx.fillRect(0, 0, w, h);
  
  ctx.font = '15pt monospace';
  
  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128); // Generate random character
    const x = ind * 20; 
    

    if (y > h - 510) { 
      ctx.fillStyle = '#7738ff';
    } else {
      ctx.fillStyle = '#fe5746'; 
    }

    ctx.fillText(text, x, y);

    // Reset position if the character is past a certain point
    if (y > 300 + Math.random() * 1200) {
      ypos[ind] = 0; 
    } else {
      ypos[ind] = y + 20; 
    }
  });
}

setInterval(matrix, 90); 