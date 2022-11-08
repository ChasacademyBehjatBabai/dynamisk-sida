
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

// visar eller döljer modal fönstret.
function toggleModal() {
    console.log("Running toggle function")
    modal.classList.toggle("show-modal");
}

// körs när man klickar var som helst på sidan.
function windowOnClick(event) {
    console.log("running windowonclick function")

    // om man klickar på modal klassen, körs if satsen.
    if (event.target === modal) {
        toggleModal();
    }
}

console.log(modal);
console.log(trigger);
console.log(closeButton);

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);