// Function to get the time of day message and time
function updateTime() {
    const greetingElement = document.getElementById('greeting');
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    
    // Determine the time of day and set a cute message
    let greetingMessage = '';
    if (hours >= 5 && hours < 12) {
        greetingMessage = 'yaaaaaaawwwnnn... good morninnggg!! >_<';
    } else if (hours >= 12 && hours < 17) {
        greetingMessage = 'hewlooo! afternoon, woahh so fast..';
    } else if (hours >= 17 && hours < 21) {
        greetingMessage = 'eveninggg, hope u had a great dayy! ;3';
    } else {
        greetingMessage = 'goonite!! sleep wel cutie >w<';
    }

    // Update the greeting message and time
    greetingElement.textContent = greetingMessage;

    // Format the time as HH:MM:SS
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `Current time: ${hours}:${minutes}:${seconds}`;
}

// Call the function immediately, then update every second
updateTime();
setInterval(updateTime, 1000);
