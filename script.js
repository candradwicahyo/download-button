window.addEventListener('DOMContentLoaded', () => {
  
  const container = document.querySelector('.container');
  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    
    const id = button.dataset.download;
    const image = document.querySelector(id);
    const a = document.createElement('a');
    
    a.setAttribute('href', image.src);
    a.setAttribute('download', 'image_' + Math.floor(Math.random() * 9999));
    a.style.display = 'none';
    
    container.appendChild(a);
    button.addEventListener('click', () => a.click());
    
  });
  
});