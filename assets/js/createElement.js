"use strict";

const USERS_URL = "https://randomuser.me/api/?results=5";

const rootEl = document.querySelector("#root");
// згенерувати список користувачів
// у кожного користувача відображати
// зображення профілю, ім'я, вік
// передбачити можливість видалення користувача зі списку

fetch(USERS_URL)
  .then(response => response.json())
  .then(({ results }) => genSingleUser(results[0]))
  .catch(err => console.log("err :>> ", err));

function genSingleUser({
  picture: { large: imgSrc },
  name: { first, last },
  dob: { age },
}) {
  const userCard = document.createElement("article");
  rootEl.append(userCard);
  userCard.classList.add("userCard");

  const imgEl = createNewImg(imgSrc, `${first} ${last}`, "userImg");
  const userName = createNewElement("h2", `${first} ${last}`, "userName");
  const userAge = createNewElement("p", age, "userAge");

  const trashIcon = document.createElement("button");
  trashIcon.classList.add("trashIcon");
  trashIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashIcon.onclick = function () {
    this.parentElement.remove();
  };

  userCard.append(imgEl, userName, userAge, trashIcon);
}

function createNewImg(src, alt, className) {
  const newImg = document.createElement("img");
  newImg.src = src;
  newImg.alt = alt;
  newImg.classList.add(className);
  return newImg;
}

function createNewElement(type, content, className) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  newElement.classList.add(className);
  return newElement;
}
