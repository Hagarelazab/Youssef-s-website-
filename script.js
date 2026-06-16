function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

function orderProduct(productName) {
  const instagramUrl = "https://www.instagram.com/avrabj";

  alert(
    "You selected: " +
      productName +
      ". You can order it through Ávra Instagram DMs."
  );

  window.open(instagramUrl, "_blank");
}
