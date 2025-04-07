document.addEventListener('DOMContentLoaded', () => {
    const minutes = document.getElementById('minute');
    const seconds = document.getElementById('seconds');
    const milliseconds = document.getElementById('millisecond');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let min = 0
    let sec = 0
    let milsec = 0
    let interval = null
    let isRunning = false

    function updateDisplay() {
        minutes.textContent = min.toString().padStart(2, '0')
        seconds.textContent = sec.toString().padStart(2, '0')
        milliseconds.textContent = milsec.toString().padStart(2, '0')
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true
        interval = setInterval(() => {
            milsec++;
            if (milsec === 100) {
                milsec = 0;
                sec++;
            }
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                resetTimer()
                return;
            }

            updateDisplay()
        }, 10)
    }

    function stopTimer() {
        clearInterval(interval)
        isRunning = false
    }

    function resetTimer() {
        clearInterval(interval)
        isRunning = false
        min = 0;
        sec = 0;
        milsec = 0;
        updateDisplay()
    }

    start.addEventListener('click', startTimer);
    stop.addEventListener('click', stopTimer)
    reset.addEventListener('click', resetTimer);

    updateDisplay();
});
