function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

document.getElementById('toggleMode').onclick = function () {
  document.body.classList.toggle('dark');
}
