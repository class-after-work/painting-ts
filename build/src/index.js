"use strict";
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
context.fillRect(0, 0, 100, 100);
context.strokeRect(100, 100, 300, 300);
setTimeout(() => {
    context.beginPath();
    context.rect(200, 200, 100, 100);
    context.rect(300, 300, 100, 100);
    context.rect(600, 600, 100, 100);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
}, 3000);
context.beginPath();
context.rect(700, 700, 100, 100);
context.fillStyle = 'blue';
context.fill();
context.closePath();
//# sourceMappingURL=index.js.map