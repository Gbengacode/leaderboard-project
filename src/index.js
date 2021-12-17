import './css/main.css';
import './css/responsive.css';
import './css/animate.css';
import './img/game.jpg';
import { fetchUsers } from './apis/index.js';
import formHandler from './events/form.js';
import refreshHandler from './events/refresh.js';
import template from './contents/template.js';

formHandler();
refreshHandler();
template(fetchUsers());
