import { createUser } from '../apis/index.js';

export default () => {
  const btnSubmit = document.querySelector('.submit');
  const user = document.querySelector('.user');
  const score = document.querySelector('.score');
  btnSubmit.addEventListener('click', (e) => {
    btnSubmit.disabled = true;
    btnSubmit.textContent = 'Processing...';
    e.preventDefault();
    if (user.value.trim === '') return;
    if (score.value.trim === '') return;
    createUser(user, score, btnSubmit);
  });
};
