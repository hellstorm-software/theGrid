termOpen.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(terminal).display;
    const currentCloseButton = window.getComputedStyle(termClose).display;
    const currentOpenButton = window.getComputedStyle(termOpen).display;
	terminal.style.display = 'block';
	termClose.style.display = 'block'; 
	termOpen.style.display = 'none'; 
});
