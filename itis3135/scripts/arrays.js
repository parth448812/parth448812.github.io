employees = ["Luis", "Dave", "Ton", "Jay", "Nicholas"];
salary = [44000, 56000, 78500, 82000, 63400];

function addSalary()
{
    let name = document.getElementById("name").value;
    let total = document.getElementById("salary").value;

       if(name == "")
       {
           document.getElementById("Name: ");
           alert("Please enter a name");
       }
       if(total == "")
       {
        document.getElementById("Salary: ");
           alert("Please enter salary");
       }
       if(name != "" && total != "")
       {
           employees.push(name);
           salary.push(total);
           alert("Information has been added successfully!");
       }
}

function displayResults()
{
    var total = 0;
    for (var i = 0; i < salary.length; i++)
    {
        total += salary[i];
    }
    var avg = total / salary.length;

    highestSalary = 0;
    salary.forEach((element) => 
    {
        if (highestSalary < element) 
        {
          highestSalary = element;
        }
    });

      document.getElementById("results").innerHTML = "<h2>Average Salary: </h2>" + avg + "<h2>Highest Salary: </h2>" + highestSalary;
}

function displaySalary()
{
    var sal_results = "<tr><td colspan='2'></td></tr><tr><td><b>Employee</b></td><td><b>Salary</b></td></tr>";

    for (var i = 0; i < employees.length; i++)
    {
    sal_results = sal_results + "<tr><td>" + employees[i] + "</td><td>" + salary[i] + "</td></tr>"
    }
    document.getElementById("results_table").innerHTML = sal_results;
}
    
function employeeName() 
{
    var mylist = document.getElementById("myList");
    document.getElementById("favourite").value = mylist.options[mylist.selectedIndex].text;
}