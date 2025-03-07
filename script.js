function toggleMode() {
  document.body.classList.toggle("light");
}

function sendChat() {
  const chatInput = document.getElementById("chatInput");
  const chatBox = document.getElementById("chatBox");
  if (chatInput.value.trim() !== "") {
    chatBox.innerHTML += `<p>Anonymous: ${chatInput.value}</p>`;
    chatInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}
