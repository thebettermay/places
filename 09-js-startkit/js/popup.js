class Popup {
  constructor(
    popupWindowCard,
    popupWindowEdit,
    popupWindowPic,
    formValidator,
    formEditValidator,
    form
  ) {
    this.formValidator = formValidator;
    this.formEditValidator = formEditValidator;
    this.popupWindowCard = popupWindowCard;
    this.popupWindowEdit = popupWindowEdit;
    this.popupWindowPic = popupWindowPic;
    this.form = form;
  }

  //открывает попап с карточками
  open(event) {
    if (event.target.classList.contains("user-info__button")) {
      this.popupWindowCard.classList.add("popup_is-opened");

      this.form.reset();
      this.popupWindowCard
        .querySelector(".popup__button")
        .classList.add("popup__button_disabled");
      this.formValidator.setEventListeners();
    }

    if (event.target.classList.contains("edit__button")) {
      this.popupWindowEdit.classList.add("popup_is-opened");
      this.form.reset();
      this.popupWindowEdit
        .querySelector(".popup__button")
        .classList.add("popup__button_disabled");
      this.popupWindowEdit
        .querySelector(".popup__button")
        .setAttribute("disabled", true);
      this.formEditValidator.setEventListeners();
    }
    //открывает попап с картинкой
    if (event.target.classList.contains("place-card__image")) {
      const bgrWay = event.target.getAttribute("style");
      const popUpPicContent = document.querySelector(".popup-pic__content");
      this.popupWindowPic.classList.add("popup_is-opened");
      popUpPicContent.setAttribute("style", bgrWay);
    }
  }
  //закрытие
  close(event) {
    if (event.type === "submit" || event.key === "Escape") {
      event.target.closest(".popup").classList.remove("popup_is-opened");
      event.preventDefault();
    }
    if (
      event.target.closest(".popup__content") === null ||
      event.target.classList.contains("popup__close")
    ) {
      event.target.closest(".popup").classList.remove("popup_is-opened");
    }
  }
}
