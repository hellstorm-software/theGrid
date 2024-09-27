document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".main-content").style.display = "block";
    }, 500); // Adjust the timeout duration as needed

    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hours % 12 || 12}:${minutes.toString().padStart(2, '0')} ${period}`;
        document.getElementById('current-time').textContent = formattedTime;
    }

    setInterval(updateTime, 1000);
    updateTime();

    document.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;
        document.getElementById('cursor-position').textContent = `${x} / ${y}`;
    });
});

