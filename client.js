function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();

    let firstName = document.querySelector('#first').value;
    //! .value always returns a string, for a number use Number(string)
    let lastName = document.querySelector('#last').value;
    let idNumber = document.querySelector('#id').value;
    let jobTitle = document.querySelector('#title').value;
    let salary = document.querySelector('#salary').value;
    let delButton = `<button onClick="removeRow(event)" >Delete</button>`
    // Find the tbody on the page so that we can append to it
    let employeeTable = document.querySelector('#employeeList');
    // let lastIndex = temperatureTable.lastElementChild;
    // let tableData = Number(lastIndex.firstElementChild.innerHTML);
    employeeTable.innerHTML += `
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumber}</td>
            <td>${jobTitle}</td>
            <td>${salary}</td>
            <td>${delButton}</td>
        </tr>
    `;
    currentIndex += 1;
    //tempData.push([tempVal, humidVal, dateVal, speedVal]);

    // Check the temperature against the high temp
    if (Number(tempVal) > highTemp) {
        // Number(tempVal) turns a string into a number
        highTemp = Number(tempVal);
        document.querySelector('#high-temp').innerHTML = highTemp;
    }

}




function removeRow(event) {
    event.target.closest('tr').remove();
}