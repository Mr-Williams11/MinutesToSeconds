// Function to convert minutes to seconds
function convertMinutesToSeconds() {
    // Parse the input to ensure it's treated as a number
    const minutes = parseFloat(document.getElementById('minutesInput').value);
    
    // Validate input
    if (isNaN(minutes) || document.getElementById('minutesInput').value === '') {
        alert('Please enter a valid number for minutes.');
        return;
    }

    // Convert minutes to seconds
    const seconds = (minutes * 60).toFixed(2);

    // Display the result
    document.getElementById('result').innerHTML = `${minutes} minutes is equal to ${seconds} seconds.`;
}

// Function to convert seconds to minutes

document.getElementById('convertButton').addEventListener('click', convertMinutesToSeconds);
