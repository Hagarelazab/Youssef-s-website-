const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/avrabyj?igsh=a2poNHdnMWwyM253";
const INSTAGRAM_DM_URL = "https://ig.me/m/avrabyj";

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    navLinks.classList.toggle("active");
  }
}

function orderProduct(productName) {
  const message = `Hello Ávra, I would like to order: ${productName}`;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(message).catch(function () {});
  }

  window.open(INSTAGRAM_DM_URL, "_blank", "noopener,noreferrer");
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.getElementById("navLinks");

  if (navLinks) {
    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("active");
      });
    });
  }
});
