// Function to get the time of day message and time
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours();
    
    // Determine the time of day and set a cute message
    let greetingMessage = '';
    if (hours >= 5 && hours < 12) {
        greetingMessage = 'yaaaaaaawwwnnn... good morninnggg!! >_<';
    } else if (hours >= 12 && hours < 17) {
        greetingMessage = 'heyyy, good afternoon, cutie!! ;3';
    } else if (hours >= 17 && hours < 21) {
        greetingMessage = 'woahhh... day over so fast.. o_o';
    } else {
        greetingMessage = 'gooniteeee... sleep well!! >3<';
    }

    // Format the time as HH:MM
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${greetingMessage} its ${hours}:${minutes} already...`;
}

// Call the function immediately, then update every minute
updateTime();
setInterval(updateTime, 60000);

// Function to copy Discord username to clipboard
function copyDiscord() {
    const discordUser = "average#1234"; // Replace with your actual Discord username
    navigator.clipboard.writeText(discordUser).then(() => {
        const status = document.getElementById('copy-status');
        status.style.display = 'block';
        status.textContent = `${discordUser} copied to clipboard!`;
        
        setTimeout(() => {
            status.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
