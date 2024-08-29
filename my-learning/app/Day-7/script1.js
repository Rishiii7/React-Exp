const toggle = document.querySelector("#toggle");

toggle.addEventListener("click", () => {
  // console.log('toggle clicked');

  // get all elements
  const rightArrow = toggle.querySelector("#right");
  const downArrow = toggle.querySelector("#down");
  const menu = toggle.querySelector("ul");

  // assign class list
  rightArrow.classList.toggle("hidden");
  downArrow.classList.toggle("hidden");
  menu.classList.toggle("hidden");
});
