import './css/main.css';
import { fetchUsers } from './apis/index.js';
import formHandler from './events/form.js';
import refreshHandler from './events/refresh.js';
import template from './contents/template.js';

formHandler();
refreshHandler();
template(fetchUsers());
