// Fungsi toggle menu navbar
function toggleMenu() {
  var menu = document.getElementById('navbarMenu');
  if (!menu) return;

  if (menu.classList) {
    menu.classList.toggle('show');
  } else {
    var classes = menu.className.split(" ");
    var i = classes.indexOf("show");
    if (i >= 0) {
      classes.splice(i, 1);
    } else {
      classes.push("show");
    }
    menu.className = classes.join(" ");
  }
}

// Fungsi blok karakter non-angka dan batasi satu titik (IE11 kompatibel)
function blockNonNumberInput() {
  var numberInputs = document.getElementsByTagName('input');
  for (var i = 0; i < numberInputs.length; i++) {
    var input = numberInputs[i];
    if (input.getAttribute('type') === 'number') {
      input.onkeydown = function(e) {
        var key = e.keyCode || e.which;

        // Angka atas (0–9)
        if (key >= 48 && key <= 57) return;

        // Angka numpad (0–9)
        if (key >= 96 && key <= 105) return;

        // Navigasi: backspace, tab, delete, panah kiri/kanan
        if (key === 8 || key === 9 || key === 46 || key === 37 || key === 39) return;

        // Titik (keyboard = 190, numpad = 110)
        if (key === 190 || key === 110) {
          // Jika sudah ada titik dalam input, blok
          if (this.value.indexOf('.') !== -1) {
            e.preventDefault();
            return;
          }
          return; // izinkan satu titik
        }

        // Selain yang diizinkan, blok
        e.preventDefault();
      };

      input.onpaste = function(e) {
        var pasted = (e.clipboardData || window.clipboardData).getData('text');
        // Jika mengandung selain angka/titik, atau lebih dari satu titik, blok
        if (/[^0-9.]/.test(pasted) || (pasted.split('.').length > 2)) {
          e.preventDefault();
        }
      };
    }
  }
}

// Jalankan setelah halaman siap
if (document.readyState === "complete" || document.readyState === "interactive") {
  setTimeout(blockNonNumberInput, 0);
} else {
  document.addEventListener('DOMContentLoaded', blockNonNumberInput);
}