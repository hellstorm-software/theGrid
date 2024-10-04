termClose.addEventListener('click', function() {
    const currentDisplay = window.getComputedStyle(terminal).display;
    const currentCloseButton = window.getComputedStyle(termClose).display;
    const currentOpenButton = window.getComputedStyle(termOpen).display;
	terminal.style.display = 'none';
	termClose.style.display = 'none'; 
	termOpen.style.display = 'block'; 
});
