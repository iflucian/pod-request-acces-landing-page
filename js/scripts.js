const form = document.querySelector("form"),
  email = document.querySelector("input"),
  error = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const emailValue = email.value.trim();
  error.style.visibility = "visible";
  if (emailValue === "") {
    error.style.color = "#fb3e3e";
    error.innerHTML = "Oops! Please add your email";
  } else if (!isEmail(emailValue)) {
    error.style.color = "#fb3e3e";
    error.innerHTML = "Oops! Please check your email";
  } else {
    error.style.color = "#54e6af";
    error.innerHTML = "Thank you! We'll get back to you soon!";
    form.reset();
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
