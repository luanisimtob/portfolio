
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (this.checkValidity()) {
        document.getElementById('feedbackMsg').classList.remove('hidden');
        this.reset();

        setTimeout(() => {
          document.getElementById('feedbackMsg').classList.add('hidden');
        }, 4000);
      }
    });
  }
});

function openModal(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("imageModal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("imageModal").classList.add("hidden");
}

function maskPhone(input) {
  let value = input.value.replace(/\D/g, '');
  if (value.length > 10) {
    input.value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else {
    input.value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  }
}

