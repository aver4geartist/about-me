// Update the time every second
function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `Current time: ${hours}:${minutes}:${seconds}`;
}

// Call the function immediately, then update every second
updateTime();
setInterval(updateTime, 1000);
