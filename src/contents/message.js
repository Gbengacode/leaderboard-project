export default (toast1) => {
  toast1.innerHTML = `  <div class="icon-container1">
    <i class="fas fa-check-circle fa-5x"></i>
  </div>
  <div class="message">
    <p class="text-success">Success</p>
    <p class="text-success">Leaderboard score created correctly.</p>
  </div>`;
  toast1.style.display = 'flex';
  setTimeout(() => {
    toast1.style.display = 'none';
  }, 5000);
};
