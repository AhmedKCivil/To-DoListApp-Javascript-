document.getElementById("startBtn").addEventListener("click", function () {

    // Get the time input
    const timeInput = document.getElementById("secondsInput").value;
    let time = parseInt(timeInput); // Convert the input to an integer

    // Check if the time is valid
    if (isNaN(time) || time <= 0) {
        alert("Please enter a valid number of seconds.");
        return;
    }


    const timerDisplay = document.getElementById("timerDisplay");

    // Start the countdown
    let timer = setInterval(function () {
        // Decrease time
        time--;

        timerDisplay.textContent = `Time remaining: ${time} seconds`;

        // When the timer hits 0, stop the countdown
        if (time <= 0) {
            clearInterval(timer); // Stop the interval
            timerDisplay.textContent = "Time is up!";
        }
    }, 1000);

});

