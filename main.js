// Global variables:
var ideaList = [];
var favoriteIdeas = [];

// Query Selectors:
var saveButton = document.querySelector(".save-button");
var formTitle = document.getElementById("title");
var formBody = document.getElementById("body");


saveButton.addEventListener("click", saveIdea);

function saveIdea() {
  event.preventDefault();
  var brandNewIdea = createNewInstance(formTitle.value, formBody.value);
  pushToArray(brandNewIdea);
}


function createNewInstance(title, body) {
   return new Idea(title, body);
}

function pushToArray(brandNewIdea) {
  ideaList.push(brandNewIdea);
}
