function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

var elements = document.getElementsByClassName('tamanho');
var fontSize = 16;

function aumentarFonte() {
  fontSize += 2;

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = fontSize + 'px';
  }
}

function diminuirFonte() {
  fontSize -= 2;

  for (var i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = fontSize + 'px';
  }
}
