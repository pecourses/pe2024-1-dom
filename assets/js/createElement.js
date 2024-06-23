"use strict";

const newsItem = {
  title: "News Title",
  body: "News Body News Body News Body News Body News Body News Body News Body News Body ",
};

// create
const articleEl = document.createElement("article");
// articleEl.textContent = "News Item body";
// articleEl.style.color = "grey";

const h3El = document.createElement("h3");
h3El.textContent = newsItem.title;
articleEl.append(h3El);

const pEl = document.createElement("p");
// p додати в розмітку
pEl.textContent = newsItem.body;
articleEl.append(pEl);

// add to html
const sectionEl = document.querySelector(".section");
sectionEl.append(articleEl);
