import { createUser } from '../apis/index.js';

const btnSubmit = document.querySelector('.submit');
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const toast = document.querySelector('.toast-container');
const toast1 = document.querySelector('.toast-container1');

export default () => {
  btnSubmit.addEventListener('click', (e) => {
    const elements = ['user', 'score', 'submit'];
    e.preventDefault();
    const [user, score] = elements.map((element) => document.querySelector(`.${element}`));
    if (user.value === '' || score.value === '') {
      toast.innerHTML = `
      <div class="icon-container">
        <i class="fas fa-times-circle"></i>
      </div>
      <div class="message">
        <p class="error">Error</p>
       <p class="error">All field are required</p>
      </div>
    `;
      toast.style.display = 'flex';

      form.insertAdjacentElement('afterbegin', toast);
      inputs.forEach((input) => {
        input.addEventListener('input', () => {
          toast.style.display = 'none';
        });
      });
      return;
    }
    btnSubmit.disabled = true;
    btnSubmit.textContent = 'Processing...';
    createUser(user, score, btnSubmit, toast1);
  });
};
