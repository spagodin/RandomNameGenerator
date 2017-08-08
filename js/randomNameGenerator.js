let nameList = [];
let numNames = '';

const randomArrayIndex = array => Math.floor(Math.random() * array.length) + 1;

const randomNames = () => {
    for (let i = 0; i < numNames; i++) {
        nameList.push(`${firstName[randomArrayIndex(firstName)]} ${lastName[randomArrayIndex(lastName)]}`);
    }
};

const printList = listName => {
    let html = '<ul>';
    for (let i = 0; i<listName.length; i++) {
        html += `<li> ${listName[i]} </li>`;
    }
    html += '</ul>'
    document.getElementById('results').innerHTML = `${numNames} Random Names`
    return html;
};

goButton.addEventListener('click', () => {
    numNames = parseInt(document.getElementById('numNames').value);
    randomNames();
    document.getElementById('randomNames').innerHTML = printList(nameList);
    nameList = [];
});






