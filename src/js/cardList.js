export default class CardList {
  constructor(container, api, card, popup, array, form) {
    this.container = container;
    this.api = api;
    this.card = card;
    this.popup = popup;
    this.array = array;
    this.form = form;
  }
  addCard(event) {
    const template = this.card.create(
      this.form.elements.link.value,
      this.form.elements.name.value
    );
    this.container.insertAdjacentHTML("beforeend", template);
    event.preventDefault();

    this.popup.close(event);
  }

  render() {
    this.api
      .getInitialCards()
      .then(data => {
        data.forEach(element => {
          this.array.push({ name: element.name, link: element.link });
        });
        let arraySlice = this.array.slice(0, 10);

        return arraySlice;
      })
      .then(arraySlice => {
        arraySlice.forEach(item => {
          const template = this.card.create(item.link, item.name);
          this.container.insertAdjacentHTML("beforeend", template);
        });
      });
  }
}
