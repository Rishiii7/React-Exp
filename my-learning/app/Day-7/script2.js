const removeButton = document.querySelectorAll(".container .remove-button");
const pane = document.querySelectorAll(".pane");

// console.log(removeButton);

removeButton.forEach((eachButton, i) => {
    eachButton.addEventListener("click", () => {
        pane[i].remove();
    });
});
