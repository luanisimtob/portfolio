function openModal(src) {
    document.getElementById("modalImg").src = src;
    document.getElementById("imageModal").classList.remove("hidden");
  }
  function closeModal() {
    document.getElementById("imageModal").classList.add("hidden");
  }