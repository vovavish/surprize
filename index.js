const container = document.querySelector('.container');

container.addEventListener('mousemove', e => {
  const posX = e.offsetX;
  const posY = e.offsetY;
  // console.log(posX + " " + posY);
  let img = document.createElement('img');
  img.classList.add('image');
  img.src = './images/heart.png';

  img.style.insetInlineStart = posX + 'px';
  img.style.insetBlockStart = posY + 'px';

  let size = Math.random() * 100 + 20;

  img.style.inlineSize = size + 'px';
  img.style.blockSize = size + 'px';

  container.append(img);

  img.addEventListener('animationend', () => {
    img.remove();
  })
})