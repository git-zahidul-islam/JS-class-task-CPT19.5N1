// // task 01
// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// // console.log(colors.reverse())

// const revColors = [];
// for (let i = colors.length -1; i >= 0; i--) {
//     let color = colors[i]
//     revColors.push(color)
// };
// console.log(revColors);

// reverse use for of 
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

const revColors = [];
for (let color of colors) {
    revColors.unshift(color)
}
console.log(revColors);