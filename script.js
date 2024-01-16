const toggleBtn = document.getElementById('toggleBtn');
const leftPanel = document.getElementById('leftPanel');

toggleBtn.addEventListener('click', function() {
  leftPanel.classList.toggle('open');
});
