const hamburger = document.querySelector('.hamburger');
const sidebar = document.getElementById('sidebar');
const pageContent = document.getElementById('page-content');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  sidebar.classList.toggle('open');
  pageContent.classList.toggle('shifted');
});

const track = document.querySelector('.carousel-track');
if (track && track.children.length > 0) {
  let index = 0;
  const slides = Array.from(track.children);

  function moveToSlide(idx) {
    track.style.transform = `translateX(-${idx * 100}%)`;
  }
  function nextSlide() {
    index = (index + 1) % slides.length;
    moveToSlide(index);
  }
  setInterval(nextSlide, 4000);
}
