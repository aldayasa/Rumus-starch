
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById('navbar-placeholder').innerHTML = xhr.responseText;
    }
  };
  xhr.open('GET', 'navbar.html', true);
  xhr.send();
  
window.onload = function () {
  var isIE = !!window.MSInputMethodContext && !!document.documentMode;

  var toggle = document.querySelector('.navbar-toggle');
  var menu = document.querySelector('.navbar-menu');

  if (isIE) {
    // Set kondisi awal
    menu.style.maxHeight = '0px';
    menu.style.overflowY = 'hidden';

    toggle.addEventListener('click', function () {
      if (menu.style.maxHeight === '0px' || menu.style.maxHeight === '') {
        menu.style.maxHeight = '300px';
        menu.style.overflowY = 'auto';
      } else {
        menu.style.maxHeight = '0px';
        menu.style.overflowY = 'hidden';
      }
    });
  } else {
    // Untuk browser modern
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
  }
};