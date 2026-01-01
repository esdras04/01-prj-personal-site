const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.querySelector('.menu-links');
const homeIcon = document.querySelector('.home-icon');

let menuOpen = false;


menuBtn.addEventListener('click', (event) => {
  event.stopPropagation(); 
  if (!menuOpen) {
    menuLinks.classList.add('show');
    menuOpen = true;
  } else {
    closeMenu();
  }
});


document.addEventListener('click', () => {
  if (menuOpen) closeMenu();
});

function closeMenu() {
  menuLinks.style.animation = 'fadeOutMenu 0.4s forwards';
  menuLinks.addEventListener('animationend', () => {
    menuLinks.classList.remove('show');
    menuLinks.style.animation = ''; 
    menuOpen = false;
  }, { once: true });
}


document.querySelectorAll('.menu-links a, .home-icon').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

 
    if (menuOpen) closeMenu();

    const target = this.getAttribute('href');
    if (target === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(target);
      if (element) {
        const topOffset = element.offsetTop - 70; 
        window.scrollTo({ top: topOffset, behavior: 'smooth' });
      }
    }
  });
});
