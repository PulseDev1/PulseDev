document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.style.boxShadow = "0 0 15px #e60012";
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.boxShadow = "none";
    });
  });
});
