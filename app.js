const closeButton = document.querySelector('.alert button');


window.addEventListener('load', setTimeout(function (e) {
  const a = document.querySelector('.alert');
  a.style.display = 'flex';
}, 2000));

closeButton.addEventListener('click', function(e) {
  const a = document.querySelector('.alert');
  a.style.display = 'none';
});
