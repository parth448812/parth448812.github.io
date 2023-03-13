document.addEventListener("DOMContentLoaded", function() {
    const header = document.createElement("header");
    header.innerHTML = `
      <h1>
        ITIS3135 | Parth Patel's Purple Panther
      </h1>
      <h3>
        <a href="index.html">Home</a> |
        <a href="introduction.html">Introduction</a> |
        <a href="tables.html">Tables</a> |
        <a href="forms.html">Forms</a> |
        <a href="website_evaluations.html">Site Evaluation</a> |
        <a href="first-scripts.html">First Scripts</a> |
        <a href="calculator_try.html">Calculator Try</a> |
        <a href="calculator_fcc.html">Calculator FCC</a> |
        <a href="polygons.html">Polygons</a> |
        <a href="arrays.html">Arrays</a> |
        <a href="contract.html">Contract</a>
      </h3>
      <h3 class="menu">
        <a href="stuff/H0Ri%20bLeW3b%24iTe.html">Crappy Website</a> |
        <a href="accessibility/Patel-Activity_Accessibility.html">Accessibility</a>
        </h3>
    `;
    document.body.insertBefore(header, document.body.firstChild);
  });  