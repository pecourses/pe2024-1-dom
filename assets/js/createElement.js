"use strict";

const newsItem = {
  title: "News Title",
  body: "News Body News Body News Body News Body News Body News Body News Body News Body ",
  date: "2024-05-10",
};
// додати в розмітку дату

const sectionEl = document.querySelector(".section");
// create

const articleEl = document.createElement("article");
sectionEl.append(articleEl);

const h3El = createNewElement("h3", newsItem.title);
const pEl = createNewElement("p", newsItem.body);
const dateEl = createNewElement("p", newsItem.date);

articleEl.append(h3El, pEl, dateEl);
// add to html

function createNewElement(type, content) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  return newElement;
}
