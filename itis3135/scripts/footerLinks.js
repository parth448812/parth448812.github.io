document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
      <nav>
        <p> 
            <a target="_blank" href="https://webpages.charlotte.edu/ppate206/">UNCC Home</a> |
            <a target="_blank" href="https://github.com/parth448812">Github</a> |
            <a target="_blank" href="https://parth448812.github.io/">Github.io</a> |
            <a target="_blank" href="https://parth448812.github.io/itis3135">Course.io</a> |
            <a target="_blank" href="https://www.freecodecamp.org/parthpatel04">freeCodeCamp</a> |
            <a target="_blank" href="https://www.codecademy.com/profiles/parth448812">Codecademy</a> | 
            <a target="_blank" href="https://www.linkedin.com/in/parth-patel04">LinkedIn</a> 
        </p>
      </nav>
        <p>Designed by <a href = "patelswebcontinuum.com">Patel's Web Continuum </a>&copy;2023</p>
        <a id="img-link" href= "https://validator.w3.org/check?uri=referer">
        <img id="img-link" src="images/button-valid-html5.gif" width="88" height="31" alt="Link to HTML validator">
        </a>
        <a id="img-link" href= "https://jigsaw.w3.org/css-validator/check/referer">
        <img id="img-link" src="images/valid-css.png" width="88" height="31" alt="Link to CSS validator">
        </a>
    `;
  
    document.body.appendChild(footer);
  });  