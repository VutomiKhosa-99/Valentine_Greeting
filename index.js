const greetingDisplay = document.getElementById("greeting-display")
document.getElementById("form").addEventListener("input", writeGreeting)

function writeGreeting() {
    const recipient = document.getElementById("recipient-input").value
    const greeting = document.getElementById("greeting-select").value
    const sender = document.getElementById("sender-input").value
    greetingDisplay.textContent = `
        To ${recipient},
        ${greeting} 
        from ${sender}`
}