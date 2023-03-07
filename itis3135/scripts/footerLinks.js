function footerlinks() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "https://webpages.charlotte.edu/ppate206/", 
            "text": "Web Space",
            "alt": "Web Space"
        }, 
        "2": {
            "url": "https://github.com/parth448812", 
            "text": "GitHub",
            "alt": "GitHub"
        },
        "3": {
            "url": "https://parth448812.github.io", 
            "text": "Github.io",
            "alt": "Github.io"
        },
        "4": {
            "url": "https://github.com/parth448812/parth448812.github.io/tree/main/itis3135", 
            "text": "Course.io",
            "alt": "Course.io"
        }, 
        "5": {
            "url": "https://www.freecodecamp.org/parthpatel04", 
            "text": "freeCodeCamp",
            "alt": "freeCodeCamp"
        },
        "6": {
            "url": "https://www.codecademy.com/profiles/parth448812", 
            "text": "Codecademy",
            "alt": "Codecademy"
        },
        "7": {
            "url": "https://www.linkedin.com/in/parth-patel04", 
            "text": "LinkedIn",
            "alt": "LinkedIn"
        }
    };

    const linkSeperator = " | ";
    let htmlString = "";

    for(var id in links) {
        if (pathname === links[id]['url']) {
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length) {
            htmlString += linkSeperator;
        }
    }

    $('#footerLinks').html(htmlString);

    $('footer').css('margin', '100 auto');

    document.getElementById("designLink").innerHTML = 'Designed by <a href = "patelswebcontinuum.com">Patel	&lsquos Web Continuum</a>&copy;2023';
    document.getElementById("validatorLink").innerHTML = "<a href=\"https://validator.w3.org/check?uri=referer\" id=\"validation_link_html\"><img src=\"images/button-valid-html5.gif\" width=\"88\" height=\"31\" alt=\"Validate webpage HTML.\"></a><a href=\"https://jigsaw.w3.org/css-validator/check/referer\" id=\"validation_link_css\"><img src=\"images/valid-css.png\" width=\"88\" height=\"31\" alt=\"Validate webpage CSS.\"></a>";
}