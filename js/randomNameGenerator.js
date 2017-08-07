let nameList = [];
let html='';

const randomNames = () => {
    for (let i=0; i<100; i++) {
        let randomNumberFirst = Math.floor(Math.random() * firstName.length) + 1;
        let randomNumberLast = Math.floor(Math.random() * lastName.length)+ 1;
        nameList.push(`${firstName[randomNumberFirst]} ${lastName[randomNumberLast]}`);
    }
}

console.log(nameList);

function printList () {
    let html = '<ul>';
    for (let i = 0; i<nameList.length; i++){
        html += `<li> ${nameList[i]} </li>`;
    }
    html += '</ul>'
    return html;
    //console.log(html);
}
randomNames();
document.getElementById('stuff').innerHTML = printList();





