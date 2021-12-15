/* eslint-disable consistent-return */
import template from '../contents/template.js';

export const createGame = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ name: 'ninja game' }),
      },
    );
    return response.json();
  } catch (err) {
    return err;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q4pUMsQrXw1k6tygPFGJ/scores/',
      {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
      },
    );
    return await response.json();
  } catch (err) {
    // catch error
  }
};

export const createUser = async (user, score, btnSubmit) => {
  const userVal = user.value;
  const scoreVal = score.value;
  const userInfo = { user: userVal, score: scoreVal };
  try {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Q4pUMsQrXw1k6tygPFGJ/scores',
      {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(userInfo),
      },
    );
    await response.json();
    btnSubmit.disabled = false;
    btnSubmit.textContent = 'Submit';
    user.value = '';
    score.value = '';
    template(fetchUsers());
  } catch (err) {
    // catch error
  }
};
