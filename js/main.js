// Shared navigation, page enhancements, and contact-form validation.
document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setCurrentYear();
  setupContactForm();
});

function setupNavigation() {
  const button = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".primary-nav");

  if (!button || !navigation) return;

  button.addEventListener("click", () => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeNavigation(button, navigation);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation(button, navigation);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) closeNavigation(button, navigation);
  });
}

function closeNavigation(button, navigation) {
  button.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });
}

function setupContactForm() {
  const form = document.querySelector("#consultation-form");
  if (!form) return;

  const fields = {
    fullName: form.elements.fullName,
    email: form.elements.email,
    service: form.elements.service,
    projectDetails: form.elements.projectDetails,
    privacyConsent: form.elements.privacyConsent
  };
  const status = document.querySelector("#form-status");
  const counter = document.querySelector("#message-count");

  preselectService(fields.service);

  fields.projectDetails.addEventListener("input", () => {
    counter.textContent = fields.projectDetails.value.length;
  });

  Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => clearFieldError(field));
    field.addEventListener("change", () => clearFieldError(field));
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.classList.remove("is-visible");

    const errors = validateForm(fields);
    if (errors.length > 0) {
      errors.forEach(({ field, message }) => showFieldError(field, message));
      errors[0].field.focus();
      return;
    }

    const serviceName = fields.service.options[fields.service.selectedIndex].text;
    status.innerHTML = `<strong>Request checked successfully.</strong> Thanks, ${escapeHtml(fields.fullName.value.trim())}. Your ${escapeHtml(serviceName)} enquiry is complete, but it has not been sent or stored because this is a static student demonstration.`;
    status.classList.add("is-visible");
    status.focus();
  });
}

function preselectService(select) {
  const allowedServices = new Set(Array.from(select.options, (option) => option.value));
  const requestedService = new URLSearchParams(window.location.search).get("service");
  if (requestedService && allowedServices.has(requestedService)) select.value = requestedService;
}

function validateForm(fields) {
  const errors = [];
  const name = fields.fullName.value.trim();
  const email = fields.email.value.trim();
  const details = fields.projectDetails.value.trim();

  if (name.length < 2) errors.push({ field: fields.fullName, message: "Enter your full name using at least 2 characters." });
  if (!email) errors.push({ field: fields.email, message: "Enter your email address." });
  else if (!fields.email.validity.valid) errors.push({ field: fields.email, message: "Enter a valid email address, such as name@example.com." });
  if (!fields.service.value) errors.push({ field: fields.service, message: "Choose the service that best matches your project." });
  if (details.length < 20) errors.push({ field: fields.projectDetails, message: "Describe the project using at least 20 characters." });
  if (!fields.privacyConsent.checked) errors.push({ field: fields.privacyConsent, message: "Confirm that you understand how this demonstration form works." });

  return errors;
}

function showFieldError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  if (!error) return;
  field.setAttribute("aria-invalid", "true");
  field.setAttribute("aria-describedby", error.id);
  error.textContent = message;
}

function clearFieldError(field) {
  const error = document.querySelector(`#${field.id}-error`);
  field.removeAttribute("aria-invalid");
  field.removeAttribute("aria-describedby");
  if (error) error.textContent = "";
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}
