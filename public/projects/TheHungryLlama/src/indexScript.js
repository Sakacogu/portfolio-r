const photo = document.getElementById("llama1");
"photo element:", photo;

  photo.addEventListener("click", function () {
    ("Current photo visibility:", photo.style.display);
    photo.style.display = photo.style.display === "none" ? "block" : "none";
    ("New photo visibility:", photo.style.display);
    yumText.classList.remove("hidden");
  });