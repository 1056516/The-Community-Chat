document.getElementById('newChatButton').addEventListener('click', function() {
    document.getElementById('toolbar').style.display = 'block';
});

document.getElementById('joinButton').addEventListener('click', function() {
    document.getElementById('joinMeet').style.display = 'block';
});

document.getElementById('joinMeetButton').addEventListener('click', function() {
    const chatUrl = document.getElementById('chatInput').value;
    document.getElementById('joiningMessage').style.display = 'block';
    document.getElementById('joiningChatUrl').textContent = chatUrl;
    
    let spinner = document.getElementById('spinner');
    spinner.style.display = 'block';
    
    setTimeout(() => {
        spinner.style.display = 'none';
        document.getElementById('chatWindow').style.display = 'block';
        document.getElementById('joinMeet').style.display = 'none';
    }, Math.floor(Math.random() * 11000) + 1000); // Simulates "joining" for 1-12 seconds
});

document.getElementById('sendMessage').addEventListener('click', function() {
    const message = document.getElementById('messageInput').value;
    const messageArea = document.getElementById('messageArea');
    const userMessage = document.createElement('div');
    userMessage.className = 'message';
    userMessage.textContent = message; // You can customize for different sides based on user/session
    messageArea.appendChild(userMessage);
    document.getElementById('messageInput').value = ''; // Clear input
});

document.getElementById('callButton').addEventListener('click', function() {
    // Placeholder for call function; actual implementation would be needed
    alert('Call feature not implemented. This is a placeholder.');
});
