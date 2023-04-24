document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
    <h1 class = "cent">The Ultimate Guide to Learning Watches</h1>
    <nav>
        <a href="index.html">Home</a> |
        <a href="mechanics.html">Watch&nbsp;Mechanics</a> |
        <a href="luxury.html">Luxury&nbsp;Watches</a> |
        <a href="affordable.html">Affordable&nbsp;Alternatives</a> |
        <a href="slideshow.html">Slideshow</a> |
        <a href="aboutus.html">About&nbsp;Us</a>
    </nav>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  