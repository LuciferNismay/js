const joinScreen = document.querySelector('.join-screen');
const chatScreen = document.querySelector('.chat-screen');
const messageInput = document.getElementById('message-input');
const sendMessageBtn = document.getElementById('send-message');
const messageContainer = document.getElementById('message-container');

let username = '';

// Function to join the chat
function joinChat() {
    username = document.getElementById('username').value;
    if (username.trim() !== '') {
        joinScreen.classList.remove('active');
        chatScreen.classList.add('active');
        displayMessage('Chat Bot', `${username} has joined the chat.`);
    }
}

// Function to display a message in the chat
function displayMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    messageContainer.appendChild(messageElement);
}

// Function to send a message
function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
        displayMessage(username, message);
        messageInput.value = '';
    }
}

// Function to handle user leaving the chat
function leaveChat() {
    displayMessage('Chat Bot', `${username} has left the chat.`);
    chatScreen.classList.remove('active');
    joinScreen.classList.add('active');
    username = '';
}

// Event listeners
document.getElementById('join-user').addEventListener('click', joinChat);
sendMessageBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
document.getElementById('exit-chat').addEventListener('click', leaveChat);
