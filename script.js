"strict mode";

const contactForm = document.getElementById("contact-form");
const inputEmail = document.getElementById("email");
const btnSubmit = document.querySelector(".email__button");
const invalidEmailMsg = document.querySelector(".email-error-msg");
const card = document.querySelector(".card");
const btnDismiss = document.querySelector(".success-msg__btn");
const successMsg = document.querySelector(".success-msg");

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// functions (methods)

const validateEmail = function (email) {
  return emailRegex.test(email);
};

const showError = function () {
  inputEmail.classList.add("email-error");
  invalidEmailMsg.classList.remove("hidden");
  inputEmail.setAttribute("aria-invalid", "true");
  inputEmail.setAttribute("role", "alert");
};

const hideError = function () {
  invalidEmailMsg.classList.add("hidden");
  inputEmail.classList.remove("email-error");
  inputEmail.setAttribute("aria-invalid", "false");
  inputEmail.setAttribute("role", "status");
};

const showSuccessMsg = function () {
  card.classList.add("hidden");
  successMsg.classList.remove("hidden");
  successMsg.setAttribute("role", "alert");
};

const resetForm = function () {
  card.classList.remove("hidden");
  successMsg.classList.add("hidden");
  hideError();
  inputEmail.value = "";
};
//   submit form

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // email validation
  const email = inputEmail.value.trim();

  if (!email || !validateEmail(email)) {
    showError();
    return;
  }
  console.log(email);
  showSuccessMsg();
});

btnDismiss.addEventListener("click", function (e) {
  e.preventDefault();
  resetForm();
});

// real-time validation
inputEmail.addEventListener("input", (e) => {
  if (
    inputEmail.classList.contains("email-error") &&
    validateEmail(inputEmail.value)
  ) {
    hideError();
  }
});
