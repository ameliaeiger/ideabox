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

// Event listeners:

saveButton.addEventListener("click", saveIdea);

// Functions and event handlers:

function saveIdea() {
  event.preventDefault();
  brandNewIdea = createNewInstance(formTitle.value, formBody.value);
  pushToArray(brandNewIdea);
  updateIdeaCard();
}

function createNewInstance(title, body) {
  return new Idea(title, body);
}

function pushToArray(brandNewIdea) {
  ideaList.push(brandNewIdea);
}

function updateIdeaCard() {
  newCardTitle.innerText = brandNewIdea.title;
  newCardBody.innerText = brandNewIdea.body;
}