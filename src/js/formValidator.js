export default class FormValidator {
  constructor(element, errors) {
    this.element = element;
    this.errors = errors;
  }
  setSubmitButtonState(event) {
    const popupWindow = event.target.closest(".popup");
    const button = popupWindow.querySelector(".popup__button");
    const input1 = event.target.form.firstElementChild;
    const input2 =
      event.target.form.firstElementChild.nextElementSibling.nextElementSibling;

    if (input1.validity.valid & input2.validity.valid) {
      button.removeAttribute("disabled");
      button.classList.remove("popup__button_disabled");
    } else {
      button.setAttribute("disabled", true);
      button.classList.add("popup__button_disabled");
    }
  }
  checkInputValidity(event) {
    let errorText = "";
    const errorLabel = event.target.nextElementSibling;
    const showError = () => errorLabel.classList.add("popup__error_active");
    if (event.target.validity.valueMissing) {
      errorText = this.errors.validationEmpty;
      showError();
    }
    if (event.target.validity.tooShort) {
      errorText = this.errors.validationLength;
      showError();
    }
    if (event.target.name === "link" && event.target.validity.typeMismatch) {
      errorText = this.errors.validationLink;
      showError();
    }
    if (event.target.validity.valid) {
      errorLabel.classList.remove("popup__error_active");
    }
    errorLabel.textContent = errorText;
  }
  setEventListeners() {
    this.element.addEventListener("input", this.setSubmitButtonState);
    this.element.addEventListener("input", event =>
      this.checkInputValidity(event)
    );
  }
}
