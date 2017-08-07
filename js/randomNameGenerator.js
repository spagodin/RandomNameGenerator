
const randomNames = () => {
    for (let i=0; i<100; i++) {
        let randomNumberFirst = Math.floor(Math.random() * firstName.length) + 1;
        let randomNumberLast = Math.floor(Math.random() * lastName.length )+ 1;
        console.log(`${firstName[randomNumberFirst]} ${lastName[randomNumberLast]}`);
    }
}
 randomNames();
