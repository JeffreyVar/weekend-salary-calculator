let totalSalaries = [];
let totalMonthly = 0;

function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();
    let firstName = document.querySelector('#first').value;
    //! .value always returns a string, for a number use Number(string)
    let lastName = document.querySelector('#last').value;
    let idNumber = document.querySelector('#id').value;
    let jobTitle = document.querySelector('#title').value;
    let salary = Number(document.querySelector('#salary').value);
    let delButton = `<button id="delete" onClick="removeRow(${salary})" >Delete</button>`
    // Find the tbody on the page so that we can append to it
    let employeeTable = document.querySelector('#employeeList');
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

    totalSalaries.push(salary);
    
    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
    } 
    totalMonthly = (sum / 12).toFixed(2);

    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

     if (totalMonthly > 20000) {
         let monthlyRedDiv = document.querySelector('#monthly-amount');
         monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="color:white; background-color:#9f0000">$${totalMonthly}</span>`;
        }
}

function removeRow(salaryToRemove) {
    let row = event.target.closest('tr').remove();
    if (row) {
        row.remove();
      }

    let i = totalSalaries.indexOf(salaryToRemove);
    if (i >= 0) {
      totalSalaries.splice(i, 1);
    }

    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
    } 
    totalMonthly = (sum / 12).toFixed(2);
    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

    if (totalMonthly > 20000) {
        let monthlyRedDiv = document.querySelector('#monthly-amount');
        monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="color:white; background-color:#9f0000">$${totalMonthly}</span>`;
       }
}