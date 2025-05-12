var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById('navbar-placeholder').innerHTML = xhr.responseText;

    // Jalankan setelah navbar dimuat
    var isIE = !!window.MSInputMethodContext && !!document.documentMode;

    var toggle = document.querySelector('.navbar-toggle');
    var menu = document.querySelector('.navbar-menu');

    if (!toggle || !menu) return; // Tambahan keamanan

    if (isIE) {
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
      toggle.addEventListener('click', function () {
        menu.classList.toggle('open');
      });
    }
  }
};
xhr.open('GET', 'navbar.html', true);
xhr.send();