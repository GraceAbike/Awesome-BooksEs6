import { DateTime } from './luxon.js';

const date = document.querySelector('.date');

const renderDateTime = () => {
  setInterval(() => {
    date.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  }, 1000);
};
export default renderDateTime;