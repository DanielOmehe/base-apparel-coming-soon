const baseForm = document.querySelector(".base-apparel-form");
const email = document.querySelector("#base-email");
const errorMessage = document.querySelector(".base-message");
const errorIcon = document.querySelector(".icon-error")

const validateEmail = () => {
  const emailRegex = /^([a-z\d\,-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  if (!email.value.match(emailRegex)) {
    email.parentElement.classList.add("error");
    errorMessage.classList.add("error");
    errorMessage.innerText = "Please provide a valid email";
    errorIcon.classList.add("error");

    if (email.value === "") {
      email.parentElement.classList.add("error");
      errorMessage.classList.add("error");
      errorMessage.innerText = "Email cannot be empty";
      errorIcon.classList.add("error");
    }
  } else {
    email.parentElement.classList.remove("error");
    errorMessage.classList.remove("error");
    errorMessage.innerText = "";
    errorIcon.classList.remove("error");
  }
};

email.addEventListener("keyup", (e) => {
  e.preventDefault();
  validateEmail();
});

baseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();

  if (!email.parentElement.classList.contains("error")) {
    Swal.fire({
      title: "Success!",
      text: "Email Registered Successfully!",
      icon: "success",
    });

    baseForm.reset();
    return false;
  }
});
