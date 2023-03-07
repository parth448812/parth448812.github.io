function getShape(num) 
{

    switch (num) 
    {
        case 1:
            document.querySelector("#info")
            alert("Henagon")
            break
        case 2:
            document.querySelector("#info")
            alert("Digon")
            break
        case 3:
            document.querySelector("#info")
            alert("Trigon")
            break;
        case 4:
            document.querySelector("#info")
            alert("Tetragon")
            break
        case 5:
            document.querySelector("#info")
            alert("Pentagon")
            break
        case 6:
            document.querySelector("#info")
            alert("Hexagon")
            break
        case 7:
            document.querySelector("#info")
            alert("Heptagon")
            break
        case 8:
            document.querySelector("#info")
            alert("Octagon")
            break
        case 9:
            document.querySelector("#info")
            alert("Enneagon")
            break
        case 10:
            document.querySelector("#info")
            alert("Decagon")
            break
    }

}
function validateEntry() 
{
    var num = 0;

    while(!(num > 0 && num < 11)){
        num = Math.round(Math.abs(Number(prompt("Enter a number requested by The Purple Panther between 1-10: "))))//takes the string entered and converts it to a number, then takes the absolute value, then takes rounds it in order to cover all bases.
        if (num > 0 && num < 11)//tests the number to make sure it is number between 1 and 10 
        {
            getShape(num)
        } 
        else 
        {
            alert("The number entered is not in the range. Please enter a number between 1 - 10:")
        }
    }
}