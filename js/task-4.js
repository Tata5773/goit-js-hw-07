const formsLog = document.querySelector(".login-form");

formsLog.addEventListener("submit", (even) => {
  event.preventDefault();

  const email = formsLog.elements.email.value.trim();
  const password = formsLog.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
});
