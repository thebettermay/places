export default class UserInfo {
  constructor(api) {
    this.api = api;
  }
  setUserInfo() {
    this.api
      .getUserInfo()
      .then(user => {
        document.getElementById("photo").style.backgroundImage =
          "url(" + user.avatar + ")";
        document.querySelector(".user-info__name").textContent = user.name;
        document.querySelector(".user-info__job").textContent = user.about;
      })

      .catch(e => console.log(e));
  }
  updateUserInfo(event) {
    event.preventDefault();
    const nameInput = document.forms.edit.author;
    const jobInput = document.forms.edit.about;
    const jobInputVal = jobInput.value;
    const nameInputVal = nameInput.value;
    this.api
      .postUserInfo(nameInputVal, jobInputVal)
      .then(() => {
        const name = document.querySelector(".user-info__name");
        const job = document.querySelector(".user-info__job");

        name.textContent = nameInputVal;
        job.textContent = jobInputVal;

        event.target.closest(".popup").classList.remove("popup_is-opened");
      })

      .catch(e => console.log(e));
  }
}
