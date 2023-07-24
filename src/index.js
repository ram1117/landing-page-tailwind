import animateItems from './scripts/animations.js';
import './style.css';

const menuContainer = document.getElementById('burger-container');

const navItems = document.getElementById('navigation-list');
const mobileMenu = document.createElement('ul');
mobileMenu.innerHTML = navItems.innerHTML;
mobileMenu.id = 'mobile-nav-list';
mobileMenu.dataset.isopen = '0';
mobileMenu.classList.add(
  'list-none',
  'w-full',
  'h-45v',
  'flex',
  'flex-col',
  'justify-around',
  'items-center',
  'bg-white',
  'border-2',
  'border-black',
  'absolute',
  'hidden',
  'z-50',
);
menuContainer.appendChild(mobileMenu);

const menuList = document.getElementById('mobile-nav-list');
const isopen = menuList.dataset.isopen === '0';
const showMobileMenu = () => {
  menuList.classList.toggle('hidden');
  menuList.dataset.isopen = '0';
};
const closeMobileMenu = () => {
  menuList.classList.toggle('hidden');
  menuList.dataset.isopen = '1';
};

const hamburgerMenu = document.getElementById('burger-menu');
hamburgerMenu.onclick = () => {
  if (!isopen) {
    showMobileMenu();
  } else {
    closeMobileMenu();
  }
};

menuList.onclick = () => {
  closeMobileMenu();
};

const scrollTopBtn = document.getElementById('scrolltop-btn');
scrollTopBtn.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const eventSection = document.getElementById('section-events');
const statsSection = document.getElementById('section-stats');
const contactSection = document.getElementById('section-contact');
window.onscroll = () => {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    scrollTopBtn.classList.remove('hidden');
  } else {
    scrollTopBtn.classList.add('hidden');
  }

  animateItems(eventSection);
  animateItems(statsSection);
  animateItems(contactSection);
};
