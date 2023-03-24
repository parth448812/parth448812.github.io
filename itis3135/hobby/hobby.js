function setVisible(id) {
    document.getElementById('home').style.display = "none";
    document.getElementById('about').style.display = "none";
    document.getElementById('schedule').style.display = "none";
    document.getElementById('where').style.display = "none";
    document.getElementById('why').style.display = "none";
    document.getElementById('how').style.display = "none";
    let chosen = document.getElementById(id);
    chosen.style.display = "block";
}