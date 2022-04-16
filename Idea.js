class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
  }

  updateIdea() {
    if (!this.star) {
      this.star = true;
    } else if (this.star) {
      this.star = false;
    }
  }

  generateHtml() {
    let string = `<article class="idea-card card" id="${this.id}">
        <header class="idea-card header">
          <img src="assets/star-active.svg">
          <img class="deletable" src="assets/delete.svg">
        </header>
        <div class="text-holder">
        <h3 class="title idea-card">${this.title}</h3>
        <p id="new-body">${this.body}
        </p>
        </div>
        <footer class="footer idea-card">
          <img src="assets/comment.svg">
          <p class="footer-text">Comment</p>
        </footer>
      </article>`
      
      return string
  }

}
