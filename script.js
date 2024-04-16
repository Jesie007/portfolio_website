const photo = document.getElementById('imgClickAndChange')

photo.addEventListener('click', function(){
  // photo.style.filter = 'grayscale(0.20)';
  photo.style.filter ='blur(2px)';
  photo.style.transition = 'filter 0.5s ease';
})

document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode-toggle');

  modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
});