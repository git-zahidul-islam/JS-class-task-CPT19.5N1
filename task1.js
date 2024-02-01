// task 01
const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

// console.log(colors.reverse())

const revColors = [];
for (let i = colors.length -1; i >= 0; i--) {
    let color = colors[i]
    revColors.push(color)
};
console.log(revColors);