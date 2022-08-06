const newsLetterForm = document.getElementById("newsletter-form");

newsLetterForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = newsLetterForm.email.value.trim();
  const feedbackEL = newsLetterForm.querySelector(".feedback");

  if (email === "") {
    displayError(feedbackEL, "Email is required");
    return false;
  }

  if (!isValidEmail(email)) {
    displayError(feedbackEL, "Email is not valid");
  } else {
    feedbackEL.textContent = "";
  }
});

function isValidEmail(email) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  return regex.test(email.toLowerCase());
}

function displayError(feedbackEL, msg) {
  feedbackEL.textContent = msg;
}
