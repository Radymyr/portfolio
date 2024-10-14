import './index.scss';

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.hero__menu');
const headerLine = document.querySelector('.header__line');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
  return (
    burger.classList.toggle('active'),
    menu.classList.toggle('active'),
    headerLine.classList.toggle('active'),
    body.classList.toggle('lock')
  );
});
