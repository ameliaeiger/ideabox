// Global variables:

var ideaList = [];
var favoriteIdeas = [];
var brandNewIdea = "";


// Query Selectors:

var saveButton = document.querySelector(".save-button");
var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");
var newCardTitle = document.getElementById("new-title");
var newCardBody = document.getElementById('new-body');
let savedCardSection = document.querySelector(".grid-container")

// let clearInputFields = document.getElementById("title");
// Event listeners:

saveButton.addEventListener("click", saveIdea);

saveButton.addEventListener("click", clearInput);

saveButton.addEventListener("mouseover", updateClass);

savedCardSection.addEventListener("click", removeIdea);
// Functions and event handlers:
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


//   Instantiates new idea(object) >> pushes idea(object) to array
function saveIdea() {
  event.preventDefault();
  if (formBody.value && formTitle.value) {
  brandNewIdea = createNewInstance(formTitle.value, formBody.value);
  if (checkForDuplicate(formTitle.value, formBody.value) === "Taken") {
    console.log("this is a duplicate")
    return
  } else {
    ideaList.push(brandNewIdea);
  }
  renderDisplay();
  }
}

function renderDisplay() {
  savedCardSection.innerHTML = ""
  for (let i = 0; i < ideaList.length; i++){
    insertToDom(ideaList[i])
  }
}

function insertToDom(ideaObject) {
  let htmlString = ideaObject.generateHtml();
  let inner = document.createElement("div");
  inner.classList.add("cardDiv")
  inner.innerHTML = htmlString
  savedCardSection.appendChild(inner);
}

// -- Checks ideaList for a duplicate card
function checkForDuplicate(title, body) {
  for (let i = 0; i < ideaList.length; i++) {
    if (ideaList[i].body === body && ideaList[i].title === title) {
      console.log("Taken")
      return "Taken"
    }
  }
}


//   Instantiates new idea(object)
function createNewInstance(title, body) {
  return new Idea(title, body);
}

//   Push object to array
function pushToArray(brandNewIdea) {
  ideaList.push(brandNewIdea);
}

function clearInput() {
  formTitle.value = '';
  formBody.value = '';
}

function updateClass() {
  if (formBody.value && formTitle.value) {
    saveButton.classList.add("active");
  } else if (!formBody.value && !formTitle.value) {
    saveButton.classList.remove("active");
  }
}


// function updateIdeaCard() {
//   newCardTitle.innerText = brandNewIdea.title;
//   newCardBody.innerText = brandNewIdea.body;
// }

// function insertObjectDataToNewCard(string) {
//     savedCardSection.innerHTML = string
// }
