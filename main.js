// Global Variables:
var ideaList = [];
var brandNewIdea = "";

// Query Selectors:
var saveButton = document.querySelector(".save-button");
var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");
var newCardTitle = document.getElementById("new-title");
var newCardBody = document.getElementById("new-body");
var savedCardSection = document.querySelector(".grid-container");

// Event Listeners:
saveButton.addEventListener("click", saveIdea);
saveButton.addEventListener("mouseover", validateForm);
savedCardSection.addEventListener("click", removeIdea);
savedCardSection.addEventListener("click", toggleFavorite);

// Functions and Event Handlers:
function removeIdea(event) {
  if (event.target.className === "deletable") {
    for (var i = 0; i < ideaList.length; i++) {
      if (ideaList[i].id === parseInt(event.target.closest("article").id)) {
        ideaList.splice(i, 1);
      }
    }
  }
  renderDisplay();
}

function toggleFavorite() {
  if (event.target.className === "favorite-star") {
    for (var i = 0; i < ideaList.length; i++) {
      if (ideaList[i].id === parseInt(event.target.closest("article").id)) {
        ideaList[i].updateIdea();
      }
    }
  }
  renderDisplay();
}

function saveIdea() {
  event.preventDefault();
  if (formBody.value && formTitle.value) {
    brandNewIdea = createNewInstance(formTitle.value, formBody.value);
    if (checkForDuplicate(formTitle.value, formBody.value) === "Taken") {
      return;
    } else {
      ideaList.push(brandNewIdea);
    }
    clearInput();
    renderDisplay();
  }
}

function renderDisplay() {
  savedCardSection.innerHTML = "";
  for (var i = 0; i < ideaList.length; i++) {
    insertToDom(ideaList[i]);
  }
}

function insertToDom(ideaObject) {
  var htmlString = ideaObject.generateHtml();
  var inner = document.createElement("div");
  inner.classList.add("cardDiv");
  inner.innerHTML = htmlString;
  savedCardSection.appendChild(inner);
}

function checkForDuplicate(title, body) {
  for (var i = 0; i < ideaList.length; i++) {
    if (ideaList[i].body === body && ideaList[i].title === title) {
      return "Taken";
    }
  }
}

function createNewInstance(title, body) {
  return new Idea(title, body);
}

function clearInput() {
  formTitle.value = '';
  formBody.value = '';
}

function validateForm() {
  if (formBody.value && formTitle.value) {
    saveButton.classList.add("active");
  } else if (!formBody.value && !formTitle.value) {
    saveButton.classList.remove("active");
  }
}
