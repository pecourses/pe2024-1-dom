"use strict";

const USERS_URL = `https://randomuser.me/api/?results=5&seed=2024`;
const rootEl = document.querySelector("#root");

let currentPage = 1;
loadUsers(currentPage);

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");
prevBtn.onclick = () => {
  if (currentPage > 1) {
    currentPage--;
    loadUsers(currentPage);
  }
};
nextBtn.onclick = () => {
  currentPage++;
  loadUsers(currentPage);
};

function loadUsers(currentPage) {
  rootEl.textContent = "";
  fetch(`${USERS_URL}&page=${currentPage}`)
    .then(response => response.json())
    .then(({ results }) => results.forEach(r => genSingleUser(r)))
    .catch(err => console.log("err :>> ", err));
}

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
