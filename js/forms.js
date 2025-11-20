const form = document.querySelector("form");
const firstname = document.querySelector("full-name");
const agenumber = document.querySelector("age-number");
const totalweight = document.querySelector("total-weight");
const message = document.querySelector("message");
const terms = document.querySelector("accept_terms");
const zoo = document.querySelector("zoo");

const nameOutput = document.querySelector("#name_output");
const ageOutput = document.querySelector("#age_output");
const weightOutput = document.querySelector("#weight_output");
const messageOutput = document.querySelector("#message_output");
const termsOutput = document.querySelector("#terms_output");
const zooOutput = document.querySelector("#zoo_output");

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
  const message = formData.get("message");
  const terms = formData.get("accept_terms");
  const zoo = formData.get("zoo");

  nameOutput.textContent = firstname;
  ageOutput.textContent = agenumber;
  weightOutput.textContent = totalweight;
  messageOutput.textContent = message;
  termsOutput.textContent = terms;
  zooOutput.textContent = zoo;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
