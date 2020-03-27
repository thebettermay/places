export default class Card {
  constructor(placesList) {
    this.placesList = placesList;
  }
  like(event) {
    if (event.target.classList.contains("place-card__like-icon"))
      event.target.classList.toggle("place-card__like-icon_liked");
  }

  remove(event) {
    if (event.target.classList.contains("place-card__delete-icon"))
      this.placesList.removeChild(event.target.closest(".place-card"));
  }

  create(link, name) {
    const template = `<div class="place-card">
    <div class="place-card__image" style="background-image: url(${link})">
      <button class="place-card__delete-icon"></button>
    </div>
    <div class="place-card__description">
      <h3 class="place-card__name">${name}</h3>
      <button class="place-card__like-icon"></button>
    </div>
  </div>`;
    return template;
  }
}
