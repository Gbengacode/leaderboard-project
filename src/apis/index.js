/* eslint-disable consistent-return */
import template from '../contents/template.js';
import message from '../contents/message.js';

const API = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
const ID = 'RJWuaZF6DoI1yfcjOlyN';

function gamesOption() {
  return {
    method: 'POST',
    body: JSON.stringify({ name: 'newGame' }),
    headers: {
      'Content-type': 'application/json; charset=-8',
    },
  };
}
function usersOption() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
}

function scoreOptions(obj) {
  return {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
}
export const createGame = async () => {
  try {
    const response = await fetch(`${API}`, gamesOption);
    return response.json();
  } catch (err) {
    // return err;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API}/${ID}/scores/`, usersOption);
    return await response.json();
  } catch (err) {
    // catch error
  }
};

export const createUser = async (user, score, btnSubmit, toast1) => {
  const userVal = user.value;
  const scoreVal = score.value;
  const userInfo = { user: userVal, score: scoreVal };

  try {
    const response = await fetch(
      `${API}/${ID}/scores/`,
      scoreOptions(userInfo),
    );
    await response.json();

    btnSubmit.disabled = false;
    btnSubmit.innerHTML = '<span>Submit</span> <i class="fa fa-paper-plane" aria-hidden="true"></i>';
    user.value = '';
    score.value = '';
    message(toast1);
    template(fetchUsers());
  } catch (err) {
    // catch error
    // console.log(err);
  }
};
