const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('click');
});