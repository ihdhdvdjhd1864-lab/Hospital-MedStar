// إخفاء شاشة التحميل بعد 3 ثواني (3000ms)
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    let loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hide");
    }
  }, 3000); // 👉 هنا الـ 3 ثواني، تقدر تزودها أو تقللها براحتك
});

let observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".hidden").forEach((el) => {
  observer.observe(el);
});

let menuBtn = document.querySelector(".menu-btn");
let navLinks = document.querySelector(".nav1");

menuBtn.onclick = function () {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  } else {
    menuBtn.innerHTML = `<i class="fa-solid fa-bars-staggered"></i>`;
  }
};
