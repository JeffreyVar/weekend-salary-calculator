let totalSalaries = [];
let totalMonthly = 0;
let currentIndex = 0;

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
    let delButton = `<button onClick="removeRow(event)" >Delete</button>`
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
    currentIndex += 1;

    totalSalaries.push(salary);
    
    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
    } 
    totalMonthly = sum / 12;

    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

     if (totalMonthly > 20000) {
         let monthlyRedDiv = document.querySelector('#monthly-amount');
         monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="background-color:red">$${totalMonthly}</span>`;
        }
    

}

function removeRow(event) {
    event.target.closest('tr').remove();
    totalSalaries.pop(salary);

    let sum = 0;
    for (let i = 0; i < totalSalaries.length; i++) {
        sum += totalSalaries[i];
    } 
    totalMonthly = sum / 12;

    document.querySelector('#monthly-amount').innerHTML = `$${totalMonthly}`;

    if (totalMonthly > 20000) {
        let monthlyRedDiv = document.querySelector('#monthly-amount');
        monthlyRedDiv.innerHTML = `<span id="monthly-amount" style="background-color:red">$${totalMonthly}</span>`;
       }
}

// function removeRow(event) {
//     event.target.closest('tr').remove();
// }