// Tap/click support for nav dropdowns. Desktop hover is handled in CSS;
// this makes the submenu work on touch screens, where hover is unreliable.
document.querySelectorAll('nav > ul > li').forEach(function (item) {
  var submenu = item.querySelector('ul');
  if (!submenu) return;
  var trigger = item.querySelector('a');
  item.classList.add('has-submenu');
  trigger.setAttribute('aria-haspopup', 'true');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    var open = item.classList.toggle('open');
    trigger.setAttribute('aria-expanded', open);
  });
});

// Close any open submenu when tapping elsewhere on the page.
document.addEventListener('click', function (e) {
  document.querySelectorAll('nav li.open').forEach(function (item) {
    if (!item.contains(e.target)) {
      item.classList.remove('open');
      item.querySelector('a').setAttribute('aria-expanded', 'false');
    }
  });
});
