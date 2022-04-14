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
    let string = `<section class="idea-card-grid">
      <article class="idea-card card">
        <header class="idea-card header">
          <img src="assets/star-active.svg">
          <img src="assets/delete.svg">
        </header>
        <div class="text-holder">
        <h3 class="title idea-card" id="${this.id}">${this.title}</h3>
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
