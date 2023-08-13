function startCountdown() {
    const countdownTimerElement = document.getElementById('countdowntimer');
    
    function updateCountdown() {
        const startTime = new Date().getTime();
        const targetTime = startTime + 5 * 60 * 1000;

        function updateTimer() {
            const currentTime = new Date().getTime();
            const remainingTime = Math.max(targetTime - currentTime, 0);

            const minutes = Math.floor(remainingTime / (60 * 1000));
            const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

            countdownTimerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            if (remainingTime === 0) {
                startCountdown();
            } else {
                requestAnimationFrame(updateTimer);
            }
        }
        updateTimer();
    }
    updateCountdown();
}

document.addEventListener('DOMContentLoaded', () => {
    startCountdown();
});

