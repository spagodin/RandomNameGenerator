let nameList = [];
let numNames = '';
let goButton = document.getElementById('goButton');
let numNamesInput = document.getElementById('numNamesInput');

const randomArrayIndex = array => Math.floor(Math.random() * array.length) + 1;

const randomNames = () => {
    if(parseInt(numNames)>0) {
    for (let i = 0; i < numNames; i++) {
        nameList.push(`${firstName[randomArrayIndex(firstName)]} ${lastName[randomArrayIndex(lastName)]}`);
        }
    } else {
        nameList = [];
    }
};

const printList = listName => {
    let html = '<ul>';
    if (nameList.length > 0) {
        document.getElementById('results').innerHTML = `${numNames} Random Names`;
        for (let i = 0; i<listName.length; i++) {
            html += `<li> ${listName[i]} </li>`;
            }
        } else {
        document.getElementById('results').innerHTML ='Random Names';
        html = "<p>Please add a valid number <b>(e.g. > 0)</b></p>"
    }
    html += '</ul>'
    return html;
};

goButton.addEventListener('click', () => {
    numNames = parseInt(document.getElementById('numNamesInput').value);
    randomNames();
    document.getElementById('randomNames').innerHTML = printList(nameList);
    nameList = [];
});

numNamesInput.addEventListener('keyup', (event) => {
  if (event.which === 13) {
    document.getElementById("goButton").click();
  }
});