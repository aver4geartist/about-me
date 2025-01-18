// Function to get the time of day message and time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    
    // Determine the time of day and set a cute message
    let greetingMessage = '';
    if (hours >= 5 && hours < 12) {
        greetingMessage = 'yaaaaaaawwwnnn... good morninnggg!! :3';
    } else if (hours >= 12 && hours < 17) {
        greetingMessage = 'heyyy, good afternoon, cutie!! :3';
    } else if (hours >= 17 && hours < 21) {
        greetingMessage = 'eveninggg, hope u had a great dayy!! :3';
    } else {
        greetingMessage = 'gniiight~ sleep well!! :3';
    }

    // Format the time as HH:MM
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${greetingMessage} it's ${hours}:${minutes}`;
}

// Call the function immediately, then update every minute
updateTime();
setInterval(updateTime, 60000);
