const accordion = document.getElementsByClassName('container');

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}


function toggleMenu() {
  const toggleBtn = document.querySelector('.header_menu-mobile');
  const navLink = document.querySelector('.header_menu');

  toggleBtn.addEventListener('click', () => {
    navLink.classList.toggle('hide');

  })
}




