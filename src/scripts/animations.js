const animateItems = (section) => {
  const animeDuration = ['0.5s', '1s', '1.5s'];
  const eventsTop = section.getBoundingClientRect().top;
  const items = section.querySelectorAll('.animation-item');
  if (eventsTop < window.innerHeight - 150) {
    items.forEach((item, index) => {
      item.classList.add('events-animate');
      item.style.animationDelay = animeDuration[index];
    });
  }
};

export default animateItems;
