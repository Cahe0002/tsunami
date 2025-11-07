const form = document.querySelector("form");
const firstname = document.querySelector("full-name");
const agenumber = document.querySelector("age-number");
const totalweight = document.querySelector("total-weight");

const nameOutput = document.querySelector("#name_output");
const ageOutput = document.querySelector("#age_output");
const weightOutput = document.querySelector("#weight_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const firstname = formData.get("full-name");
  const agenumber = formData.get("age-number");
  const totalweight = formData.get("total-weight");

  nameOutput.textContent = firstname;
  ageOutput.textContent = agenumber;
  weightOutput.textContent = totalweight;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
