import template from '../contents/template.js';

import { fetchUsers } from '../apis/index.js';

export default () => {
  const btnRefresh = document.querySelector('.refresh');

  btnRefresh.addEventListener('click', () => {
    template(fetchUsers());
  });
};
