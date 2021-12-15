import { createUser } from '../apis/index.js';

const btnSubmit = document.querySelector('.submit');
const user = document.querySelector('.user');
const score = document.querySelector('.score');
export default () => {
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (user.value.trim() === '') return;
    if (score.value.trim() === '') return;
    btnSubmit.disabled = true;
    btnSubmit.textContent = 'Processing...';
    createUser(user, score, btnSubmit);
  });
};
