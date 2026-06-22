function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const menuBtn = document.querySelector(".menu-btn");

  if (!navLinks) return;

  const isOpen = navLinks.classList.toggle("active");

  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }
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

function orderProduct(productName) {
  const instagramUrl = "https://ig.me/m/avrabj";

  const orderMessage =
    "Hello Ávra, I want to order " +
    productName +
    ". Please send me availability and delivery details.";

  window.open(instagramUrl, "_blank", "noopener,noreferrer");

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard
      .writeText(orderMessage)
      .then(function () {
        alert(
          "Your order message has been copied. Paste it in Ávra Instagram DM."
        );
      })
      .catch(function () {
        alert("Copy this message and send it on Instagram:\n\n" + orderMessage);
      });
  } else {
    alert("Copy this message and send it on Instagram:\n\n" + orderMessage);
  }
}
