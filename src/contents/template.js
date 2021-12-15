export default (fetchUsers) => {
  fetchUsers.then((users) => {
    const scores = document.querySelector('.score-display');
    const ul = scores.firstElementChild;
    ul.innerHTML = '';
    users.result.sort().forEach((user) => {
      ul.innerHTML += `<li>
    <p>${user.user} :</p>
    <p>${user.score}</p>
  </li>`;
    });
  });
};
