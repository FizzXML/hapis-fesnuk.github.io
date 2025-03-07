document.addEventListener("DOMContentLoaded", function () {
  const text = "Selamat Datang di Hapis Fesnuk Web 😹";
  let i = 0;
  const ketikan = document.getElementById("ketikan");

  function type() {
    if (i < text.length) {
      ketikan.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  type();
});

function toggleMode() {
  document.body.classList.toggle("light");
  alert("Mode Diganti!");
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