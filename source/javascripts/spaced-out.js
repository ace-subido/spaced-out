var SpacedOutMenu = (function() {
  var openBtn, cover;

  function onDocumentKeyUp(event) {
    if(event.keyCode === 27) {
      close();
    }
  }

  function onDocumentClick(event) {
    if(event.target === cover) {
      deactivate();
    }
  }

  function addClass(element, name) {
    if (element.classList)
      element.classList.add(name);
    else
      element.className += ' ' + name;
  }

  function removeClass(element, name) {
    if (element.classList)
      element.classList.remove(name);
    else
      element.className = element.className.replace(new RegExp('(^|\\b)' + name.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }

  function show() {
    addClass(page, 'opened');
    cover.addEventListener('click', close);
    cover.addEventListener('touchstart', close);

    document.addEventListener('keyup', onDocumentKeyUp);
  }

  function close() {
    removeClass(page, 'opened');
    cover.removeEventListener('click', close);
    cover.removeEventListener('touchstart', close);

    document.removeEventListener('keyup', onDocumentKeyUp);
  }

  function install() {
    openBtn = document.querySelector('.so-menu-toggle');
    cover = document.querySelector('.so-content-overlay');
    page = document.querySelector('.so-page-wrapper');

    openBtn.addEventListener('click', show);
    openBtn.addEventListener('touchstart', show);
  }

  function uninstall() {
    removeClass(page, 'opened');

    openBtn.removeEventListener('click', show);
    openBtn.removeEventListener('touchstart', show);

    cover.removeEventListener('click', close);
    cover.removeEventListener('touchstart', close);

    document.removeEventListener('keyup', onDocumentKeyUp);
  }

  return {
    install: install,
    uninstall: uninstall
  }
})();
