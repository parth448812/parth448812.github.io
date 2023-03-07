function sitelinks() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": 
        {
            "url": "index.html", 
            "text": "Home",
            "alt": "Home"
        }, 
        "2": 
        {
            "url": "introduction.html", 
            "text": "Introduction",
            "alt": "Introduction"
        },
        "3": 
        {
            "url": "tables.html", 
            "text": "Tables",
            "alt": "Tables"
        }, 
        "4": 
        {
            "url": "forms.html", 
            "text": "Forms",
            "alt": "Forms"
        },
        "5": 
        {
            "url": "website_evaluations.html", 
            "text": "Site Evaluations",
            "alt": "Site Evaluations"
        },
        "6": 
        {
            "url": "firstscripts.html", 
            "text": "First Scripts",
            "alt": "First Scripts"
        },
        "7": 
        {
            "url": "calculator_try.html", 
            "text": "Calculator",
            "alt": "Calculator"
        },
        "8": 
        {
            "url": "polygons.html", 
            "text": "Polygons",
            "alt": "Polygons"
        }
    };

    const linkSeperator = " | ";

    let htmlString = "";
    for(var id in links) 
    {
        if (pathname === links[id]['url']) 
        {
            htmlString += links[id]['text'];
        } 
        else 
        {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length) 
        {
            htmlString += linkSeperator;
        }
    }

    $('#siteLinks').html(htmlString);

    $('footer').css('margin', '100 auto');
}

function sitelinks2() {
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = 
    {
        "1": 
        {
            "url": "stuff/H0Ri%20bLeW3b%24iTe.html", 
            "text": "Crappy Website",
            "alt": "Crappy Website"
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

    $('#siteLinks2').html(htmlString);

    $('footer').css('margin', '100 auto');
}