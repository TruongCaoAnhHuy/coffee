const header = document.querySelector('.header');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};