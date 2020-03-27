export default class Api {
  /*  Можно лучше: В качестве параметров передавайте не переменные, а объект
  *  если вы в ходе развития проекта захотите добавить переменных, то вам придётся менять код во многих местах 
  *  https: //refactoring.guru/ru/smells/long-parameter-list 
  * Как пример:  
   const myObject = {name:"test", url : "http//:ya.ru"}
   function myFunction(param)
   {
     param.name;
     param.url;
   }
   myFunction(myObject)
  */
  constructor(address, id, pathInfo, pathInfo2, token) {
    this.address = address;
    this.token = token;
    this.id = id;
    this.pathInfo = pathInfo;
    this.pathInfo2 = pathInfo2;
  }
  getUserInfo() {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      method: "GET",
      headers: {
        authorization: `${this.token}`
      }
    })
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(res => {
        return res;
      })
      .catch(e => console.log("Ошибка"));
  }
  postUserInfo(nameU, info) {
    return fetch(`${this.address}${this.id}${this.pathInfo}`, {
      method: "PATCH",
      headers: {
        authorization: `${this.token}`,
        "content-type": "application/json"
      },
      body: JSON.stringify({ name: `${nameU}`, about: `${info}` })
    })
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(res => {
        return res;
      })
      .catch(e => console.log(e));
  }

  getInitialCards() {
    return fetch(`${this.address}${this.id}${this.pathInfo2}`, {
      method: "GET",
      headers: {
        authorization: `${this.token}`
      }
    })
      .then(res => (res.ok ? res.json() : Promise.reject()))
      .then(res => {
        console.log(res);
        return res;
      })
      .catch(e => console.log("Ошибка"));
  }
}
