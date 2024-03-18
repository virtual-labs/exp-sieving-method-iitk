const power_btn = document.querySelector(".power_btn");
const root = document.querySelector(":root");

power_btn.addEventListener("click", (e) => {
  if (e.target.checked) {
    // play animation
    root.style.setProperty(
      "--shake_stand",
      "up_down 0.5s ease-in-out infinite"
    );
    root.style.setProperty(
      "--shake_tapper",
      "tapper 1.2s ease-in-out infinite"
    );
  } else {
    // stop animation
    root.style.setProperty("--shake_stand", "none");
    root.style.setProperty("--shake_tapper", "none");
  }
});
