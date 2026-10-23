(function () {
  // Al abrir la web desde el ordenador (file://), las carpetas no cargan su index.html solas.
  if (location.protocol === 'file:') {
    var links = document.querySelectorAll('a[href]');
    for (var i = 0; i < links.length; i++) {
      var h = links[i].getAttribute('href');
      if (/^(https?:|tel:|mailto:|#)/.test(h)) continue;
      var parts = h.split('#');
      if (parts[0].slice(-1) === '/') {
        links[i].setAttribute('href', parts[0] + 'index.html' + (parts[1] ? '#' + parts[1] : ''));
      }
    }
  }
})();
(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (!btn || !nav) return;
  var label = btn.querySelector('.menu-label');
  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.textContent = open ? btn.getAttribute('data-close') : btn.getAttribute('data-open');
  }
  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); btn.focus(); }
  });
})();
