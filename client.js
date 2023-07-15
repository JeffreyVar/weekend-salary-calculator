function submitForm(event) {
    console.log('submitForm');
    // Stop the page from refreshing
    event.preventDefault();
}

function removeRow(event) {
    event.target.closest('tr').remove();
}