// JavaScript code for adding dummy chats, creating new charts, and displaying messages
const existingChats = document.getElementById("existing-chats");
const messageContainer = document.getElementById("message-container");
const newChartBtn = document.getElementById("new-chart-btn");
const inputBox = document.getElementById("input-box");
const sendButton = document.getElementById("send-button");

// Dummy chat data
const dummyChats = [
    { name: "User 1", message: "Hello!" },
    { name: "User 2", message: "Hi there!" },
    { name: "User 1", message: "How are you doing?" },
];

// Add dummy chat items
dummyChats.forEach((chat) => {
    const chatItem = document.createElement("div");
    chatItem.classList.add("chat-item");
    chatItem.textContent = `${chat.name}: ${chat.message}`;
    existingChats.appendChild(chatItem);
});

// Function to create a new chart
function createNewChart() {
    const chartName = prompt("Enter chart name:");
    if (chartName) {
        const chartItem = document.createElement("div");
        chartItem.classList.add("chat-item");
        chartItem.textContent = chartName;
        existingChats.appendChild(chartItem);
    }
}

// Event listener for the New Chart button
newChartBtn.addEventListener("click", createNewChart);

// Function to send a message
function sendMessage() {
    const messageText = inputBox.value;
    if (messageText) {
        const messageItem = document.createElement("div");
        messageItem.textContent = messageText;
        messageContainer.appendChild(messageItem);
        inputBox.value = "";
    }
}

// Event listeners for sending messages
sendButton.addEventListener("click", sendMessage);
inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sendMessage();
    }
    const hideSidebarButton = document.getElementById("hide-left-pane-btn");
    const showSidebarButton = document.getElementById("show-sidebar-btn");
    const leftPane = document.getElementById("left-pane");
    const rightPane = document.getElementById("right-pane");

// Function to hide the left sidebar
function hideSidebar() {
  leftPane.classList.add("hidden");
  showSidebarButton.style.display = "block";
  rightPane.style.width = "100%";
}

// Function to show the left sidebar
function showSidebar() {
leftPane.classList.remove("hidden");
showSidebarButton.style.display = "none";
rightPane.style.width = "75%";
}

hideSidebarButton.addEventListener("click", hideSidebar);
showSidebarButton.addEventListener("click", showSidebar);

});

