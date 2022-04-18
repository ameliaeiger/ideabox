class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
    this.src = "assets/star.svg";
  }

  updateIdea() {
    if (!this.star) {
      this.star = true;
      this.src = "assets/star-active.svg"
    } else if (this.star) {
      this.star = false;
      this.src = "assets/star.svg";
    }
  }

  generateHtml() {
    var string = `<article class="idea-card card" id="${this.id}">
        <header class="idea-card header">
          <img class="favorite-star" src="${this.src}">
          <img class="deletable" src="assets/delete.svg">
        </header>
        <div class="text-holder">
        <h3 class="title idea-card">${this.title}</h3>
        <p class="body-text">${this.body}
        </p>
        </div>
        <footer class="footer idea-card">
          <img src="assets/comment.svg">
          <p class="footer-text">Comment</p>
        </footer>
      </article>`

    return string;
  }
}
