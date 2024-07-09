const signBtn = document.querySelector(".js-btn");
const signBox = document.querySelector(".sign-box");
const body = document.querySelector(".body");
const jsButton = document.querySelector(".js-button");
const firstName = document.querySelector(".first-name");
const lastName = document.querySelector(".last-name");

signBtn.addEventListener("click", openSign);
jsButton.addEventListener("click", closeSign);

function openSign() {
    signBox.classList.toggle("show");
    signBtn.setAttribute("disabled", true);
    body.style.opacity = "0.3";
}

function closeSign() {
    signBox.classList.remove("show");
    signBtn.removeAttribute("disabled", true);
    body.style.opacity = "1";
}

const myForm = document.querySelector(".js-form");

myForm.addEventListener("submit", formValue);

function formValue(event) {
    event.preventDefault();

    let jsFirst = firstName.value;
    let jsLast = lastName.value;

    alert(`${jsFirst} ${jsLast}`);
    closeSign();
}
