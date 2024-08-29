const button = document.querySelector('#hider');
const text = document.querySelector('#text');


button.addEventListener('click', () => {
    console.log('event clicked');
    text.classList.toggle('hidden');
    button.classList.toggle('hidden');
})

button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);


const field = document.querySelector('#field');
const ballImage = field.querySelector('img');

field.addEventListener('click', (event) => {
    const fieldRect = field.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();

    // Calculate the new position of the ball
    let newLeft = event.clientX - fieldRect.left - ballRect.width / 2;
    let newTop = event.clientY - fieldRect.top - ballRect.height / 2;

    // Ensure the ball stays within the field boundaries
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + ballRect.width > fieldRect.width) newLeft = fieldRect.width - ballRect.width;
    if (newTop + ballRect.height > fieldRect.height) newTop = fieldRect.height - ballRect.height;

    // Apply the calculated position
    ball.style.left = `${newLeft}px`;
    ball.style.top = `${newTop}px`;
});