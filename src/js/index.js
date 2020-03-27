import "../pages/index.css";
import Api from "./api";
import Card from "./card";
import CardList from "./cardList";
import FormValidator from "./formValidator";
import Popup from "./popup";
import UserInfo from "./userInfo";

const placesList = document.querySelector(".places-list");
const popupWindowCard = document.querySelector(".popup-add-card");
const popupWindowEdit = document.querySelector(".popup__edit");
const popupWindowPic = document.querySelector(".popup-pic");
const form = document.forms.new;
const errors = {
  validationEmpty: "Это обязательное поле",
  validationLength: "Должно быть от 2 до 30 символов",
  validationLink: "Здесь должна быть ссылка"
};
const formEdit = document.forms.edit;
const api = new Api(
  "https://praktikum.tk/",
  "cohort8/",
  "users/me",
  "cards",
  "136b7cf3-dc68-4441-b443-8eb7e7bc061c"
);

const formValidator = new FormValidator(form, errors);
const formEditValidator = new FormValidator(formEdit, errors);
const popup = new Popup(
  popupWindowCard,
  popupWindowEdit,
  popupWindowPic,
  formValidator,
  formEditValidator,
  form
);

const card = new Card(placesList);
const cardListisng = new CardList(
  document.querySelector(".places-list"),
  api,
  card,
  popup,
  [],
  form
);
cardListisng.render();

const userInfo = new UserInfo(api);

placesList.addEventListener("click", card.like);
placesList.addEventListener("click", event => card.remove(event));
document.forms.new.addEventListener("submit", function(event) {
  event.preventDefault();
  cardListisng.addCard(event);
});

userInfo.setUserInfo();
document.forms.edit.addEventListener("submit", event =>
  userInfo.updateUserInfo(event)
);
document.addEventListener("click", popup.open.bind(popup));
popupWindowEdit.addEventListener("click", popup.close);
popupWindowEdit.addEventListener("keydown", popup.close);
popupWindowCard.addEventListener("click", popup.close);
popupWindowCard.addEventListener("keydown", popup.close);
popupWindowPic.addEventListener("click", popup.close);
popupWindowPic.addEventListener("keydown", popup.close);

/**
* Здравствуйте.
* Очень хорошая работа, чистая.
*
 Перед сдачей работы на проверку или публикацией
удаляйте console.log() везде
console.log() используется только для разработки.

* Исправьте пожалуйста редактирование профиля. При первом редактировании данные отсутствуют, появляются только при повторном
*
* Очень чистый класс API, я бы обработку ошибок правда вынес в отдельный метод

  * Класс Api это отдельный класс который ничего не знает о других классах и методах
  * Вы можете только получать данные из этого класса и использовать эти данные.
  * Представьте, что я дам Вам другой класс(допустим DataBase) к внутренностям которого вы не будете иметь доступ и даже прочитать этот файл не сможете
  * скажу что у него есть несколько методов  getInitialCards deleteCard addCard, editUserInfo, setUserInfo и так далее
  * Который только возвращает данные, а вы можите получить только обращась к этим методам.
  * Соответственно в классе нельзя реализовать такие методы как querySelector или обратиться к другому классу, а только обратитьсяк методам.
  * Отдельная обязанность. Таким же способом Вы обращаетесь к серверу. Вы не знаете, что на сервере, даже язык программирования, но вы знаете методы
  * к которым обращаетесь и способ обращения. Это и есть обязанность отдельного класса.
  *
*

*/
