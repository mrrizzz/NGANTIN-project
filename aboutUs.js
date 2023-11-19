const animatedElement = document.querySelector("");
let animationRequested = false;
// Fungsi untuk memeriksa apakah elemen dalam tampilan
const isInView = () => {
  const rect = animatedElement.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight + 500;
};

// Fungsi untuk menanggapi peristiwa scroll
const handleScroll = () => {
  if (!animationRequested && isInView()) {
    animationRequested = true;
    requestAnimationFrame(() => {
      animatedElement.classList.add("animate__fadeInDown");
      animationRequested = false;
    });
  } else if (!isInView()) {
    animatedElement.classList.remove("animate__fadeInDown");
  }
};

// Tambahkan listener scroll ke window
window.addEventListener("scroll", handleScroll);

// Panggil handleScroll untuk memeriksa status awal
handleScroll();
