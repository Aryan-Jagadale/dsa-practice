let titles = document.querySelectorAll(".title");

// let description = document.querySelector(".desc");

titles.forEach((header) => {
  header.addEventListener("click", (e) => {
    const parent = header.parentElement;
   
    const description = parent.querySelector(".desc");
    description.classList.toggle("desc-show")
  });
});
