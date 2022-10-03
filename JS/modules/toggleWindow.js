const listEl = document.querySelector('.list');
const addnewEl = document.querySelector('.addnew');
const contactEl = document.querySelector('.contact');
const awesomeBookEl = document.querySelector('.awesome-book');
const contactInformEl = document.querySelector('.contact-inform');
const form = document.querySelector('form');

const toggleWindow = () => {
  listEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformEl.classList.remove('show');
    awesomeBookEl.classList.remove('hide');
  });

  addnewEl.addEventListener('click', () => {
    form.classList.add('show');
    contactInformEl.classList.remove('show');
    awesomeBookEl.classList.add('hide');
  });

  contactEl.addEventListener('click', () => {
    form.classList.remove('show');
    contactInformEl.classList.add('show');
    awesomeBookEl.classList.add('hide');
  });
};

export default toggleWindow;
