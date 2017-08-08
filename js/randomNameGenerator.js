let nameList = [];

const randomArrayIndex = array => Math.floor(Math.random() * array.length) + 1;

const randomNames = () => {
    for (let i = 0; i < 10; i++) {
        nameList.push(`${firstName[randomArrayIndex(firstName)]} ${lastName[randomArrayIndex(lastName)]}`);
    }
};

const printList = listName => {
    let html = '<ul>';
    for (let i = 0; i<listName.length; i++) {
        html += `<li> ${listName[i]} </li>`;
    }
    html += '</ul>'
    return html;
};

randomNames();
document.getElementById('randomNames').innerHTML = printList(nameList);





