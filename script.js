const toggleBtn = document.getElementById('toggle-dark');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark-mode');
  const isDark = document.documentElement.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark ? 'on' : 'off');
});

window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'on') {
    document.documentElement.classList.add('dark-mode');
  }
});