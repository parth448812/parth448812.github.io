function nameFeeling()
{
    var fName = window.prompt("What is your name?");
    var mood = window.prompt("How are you doing?");
    var today = new Date();
document.getElementById("first1").innerHTML="<br>Today is " + today.toDateString() + " and the time is " + today.getHours() + ":" + today.getMinutes();
document.getElementById("first2").innerHTML="<br>Patel's Web Continuum welcomes you, <b>" + fName + "</b> to the Purple Panthers!";
document.getElementById("first3").innerHTML="<br>We're happy to see you are doing <u>" + mood + "</u>!";
}

function pantherParade(){
    var pan1, pan2;
    document.write("<h1>The Purple Panther Parade</h1>")
    document.write("You have 10 panthers in one party and 6 in another, what is the total number of panthers that have in a party?")
    pan1 = 10;
    pan2 = 6;
    panTotal = pan1 + pan2;
    document.write("<br>There are " + panTotal + " panthers having a party right now!");
}

function entryCost(){
    document.write("<h1>Cost of 14 panthers to enter the Party</h1>")
    document.write("The price of a ticket to enter the panther party is $16 per person. What is the cost for 14 panthers all together?");

    var base = 16;
    var numOfPan = 14;
    var totalCost = base*numOfPan;
    document.write("<br>The total cost of all panthers to gain entryis $" + totalCost); 
}

function LastTwoLetter(){
    document.write("<h1>Last Two Letters Generator</h1>")
    document.write("Interested to see the last two letters for any panther name?")
    var panName = window.prompt("Type a panther name");
    document.write("<br>The last two letters of " + panName + " are " + panName[panName.length - 2]+panName[panName.length - 1]);
}

function area(){
    document.write("<h1>Triangular Panther Pool Area Calculator App</h1>")
    document.write("What will the area of a triangular pool for our panthers be if it has the base of 24.7 feet and height of 15 feet?");
    var base = 24.7;
    var height = 15;
    var area = (base*height)/2;
    return document.write("<br>The area of the Triangualar pool is " + area + " feet squared")
}
function kmToMi(){
    document.write("<h1>Kilometers to Miles Converter App</h1>")
    document.write("The top speed of a panther is 80.48 kilometers per hour, but what is that in miles?");
    var km = 80.48;
    var mi = km/1.609;
    document.write("<br> The speed " + km + " kilometers per hour is equivalent to " + mi + " miles per hour.");

}