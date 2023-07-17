// Declares these global variables that will be used in the functions below
let totalSalaries = [];
let totalMonthly = 0;

// This function handles the form submit event
function submitForm(event) {
    // Stop the page from refreshing
    event.preventDefault();
    let firstName = document.querySelector('#first').value;
    let lastName = document.querySelector('#last').value;
    let idNumber = document.querySelector('#id').value;
    let jobTitle = document.querySelector('#title').value;
    // Returns this as number instead of a string
    let salary = Number(document.querySelector('#salary').value);
    // Appends to DOM upon submit event, id allows for button styling in CSS
    let delButton = `<button id="delete" onClick="removeRow(${salary})" >Delete</button>`
    let employeeTable = document.querySelector('#employeeList');
    // Appends this rowm to DOM upon submit event
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>$${salary}</td>
            <td>${delButton}</td>
        </tr>
    `;

    // Adds submitted salary into array
    totalSalaries.push(salary);
    
    // Adds salaries in array
    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
    } 
    // Divides sum by 12 to find monthly cost and round to 100th place
    totalMonthly = (sum / 12).toFixed(2);
    // Appends monthly cost to DOM
    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

    // Turns background of monthly cost Red (and text White for better readability) if over $20000
    if (totalMonthly > 20000) {
        let monthlyRedDiv = document.querySelector('#monthly-amount');
        monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="color:white; background-color:#9f0000">$${totalMonthly}</span>`;
        }
}

// This functions removes both the row from the DOM and the salary of the deleted row from the monthly cost
function removeRow(salaryToRemove) {
    // removeRow must accept an argument now on order to remove the specific salary in the row
    // This conditional allows removeRow function to accept an argument and still remove the closest row
    let row = event.target.closest('tr').remove();
    if (row) {
        row.remove();
        }
    
    // Identifies index in array to be removed 
    let i = totalSalaries.indexOf(salaryToRemove);
    if (i >= 0) {
        // Removes that item only from array
        totalSalaries.splice(i, 1);
        }

    // Recalculates sum of salaries in array
    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
        }
    // Divides sum by 12 to find monthly cost and round to 100th place
    totalMonthly = (sum / 12).toFixed(2);
    // Appends updated monthly to DOM
    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

    // Turns background of monthly cost Red (and text White for better readability) if over $20000
    if (totalMonthly > 20000) {
        let monthlyRedDiv = document.querySelector('#monthly-amount');
        monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="color:white; background-color:#9f0000">$${totalMonthly}</span>`;
        }
}