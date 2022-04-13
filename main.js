// Global variables:
var ideaList = [];
var favoriteIdeas = [];
var brandNewIdea;

// Query Selectors:
var saveButton = document.querySelector(".save-button");
var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");


saveButton.addEventListener("click", saveIdea);

function saveIdea() {
  event.preventDefault();
  console.log("event", event);
  createNewInstance(formTitle.value, formBody.value);
}


function createNewInstance(title, body) {
   brandNewIdea = new Idea(title, body);
}

function pushToArray() {
  ideaList.push(brandNewIdea)
}
