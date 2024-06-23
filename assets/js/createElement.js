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
  // сворити елемент
  // налаштувати (контент, стилі, атрибути, ...)
  // навісити обробник
  // додати елемент в розмітку

  const userCard = document.createElement("article");
  rootEl.append(userCard);
  userCard.classList.add("userCard");

  // додати img (створити, задати клас, src з imgSrc,
  //             alt - конкатенація first, last )
  const imgEl = document.createElement("img");
  imgEl.classList.add("userImg");
  imgEl.src = imgSrc;
  imgEl.alt = `${first} ${last}`;
  userCard.appendChild(imgEl);

  const userName = document.createElement("h2");
  userName.classList.add("userName");
  userName.textContent = `${first} ${last}`;
  userCard.append(userName);

  const userAge = document.createElement("p");
  userAge.classList.add("userAge");
  userAge.textContent = age;
  userCard.append(userAge);

  const trashIcon = document.createElement("button");
  trashIcon.classList.add("trashIcon");
  trashIcon.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  userCard.append(trashIcon);
}
