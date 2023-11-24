// Ambil elemen yang akan dianimasikan
const animatedElement = document.querySelector(".jumbotron");
let animationRequested = false;
// Fungsi untuk memeriksa apakah elemen dalam tampilan
const isInView = () => {
  const rect = animatedElement.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

// Fungsi untuk menanggapi peristiwa scroll
const handleScroll = () => {
  if (!animationRequested && isInView()) {
    animationRequested = true;
    requestAnimationFrame(() => {
      animatedElement.classList.add("animate");
      animationRequested = false;
    });
  } else if (!isInView()) {
    animatedElement.classList.remove("animate");
  }
};

// Tambahkan listener scroll ke window
window.addEventListener("scroll", handleScroll);

// Panggil handleScroll untuk memeriksa status awal
handleScroll();

document.addEventListener("DOMContentLoaded", () => {
  const navigateButton = document.querySelector("#login-button");

  navigateButton.addEventListener("click", () => {
    // Ganti URL sesuai dengan halaman yang ingin Anda tuju
    window.location.href = "http://localhost:5500/beranda.html";
  });
});
