const modal = document.getElementById("my-modal");
const modalButtons = document.querySelectorAll('.modal-open')
const okButton = document.getElementById("ok-btn");

const toggleModal = () => modal.style.display = "block";

// open modal
for (var i = 0; i < modalButtons.length; i++) {
    modalButtons[i].addEventListener('click', toggleModal)
}

// close modal
okButton.onclick = function () {
    modal.style.display = "none";
}

// register clicks outside modal
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}