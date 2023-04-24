document.addEventListener("DOMContentLoaded", function() {
    var footer = document.createElement("footer");
  
    footer.innerHTML = `
        <p class="low_font">Designed by <a href = "../patelswebcontinuum.com">Patel's Web Continuum</a>&copy;2023</p>
        <a id="img-link" href = "https://validator.w3.org/check?uri=referer">
            <img id="img-link" src="images/button-valid-html5.gif" width="88" height="31" alt="Link to HTML validator">
        </a>
        <a id="img-link" href= "https://jigsaw.w3.org/css-validator/check/referer">
            <img id="img-link" src="images/valid-css.png" width="88" height="31" alt="Link to CSS validator">
        </a>
    `;
  
    document.body.appendChild(footer);
  });  