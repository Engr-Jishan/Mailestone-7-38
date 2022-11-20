// console.log('first');
// setInterval(() => {
//     console.log('Third');
// }, 1000);
// console.log('Second');

// let seconds = 0;
// setInterval(() => {
//     seconds++;
//     console.log(seconds)
// }, 1000);

let first = 6;
const timeId = setInterval(() => {
    first--;
    console.log(first);
    if (first < 1) {
        clearInterval(timeId);

    }
}, 1000);
