const arrows = document.querySelectorAll(".arrow");

const leftArrowClickHandler = (event) => {
    console.log("left");
};
const rightArrowClickHandler = (event) => {
    console.log("right");
};

arrows.forEach((arrow) => {
    switch (arrow.classList[1]) {
        case "left":
            arrow.addEventListener("click", leftArrowClickHandler);
            break;
        case "right":
            arrow.addEventListener("click", rightArrowClickHandler);
            break;
        default:
            alert("something went wrong");
    }
});
