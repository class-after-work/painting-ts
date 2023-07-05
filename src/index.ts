const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const context = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = 800;
canvas.height = 800;

context.fillRect(215, 200, 15, 100);
context.fillRect(335, 200, 15, 100);

context.fillRect(250, 200, 60, 200);

context.arc(280, 150, 50, 0, 2 * Math.PI);
context.fill();

context.beginPath();
context.arc(265, 150, 5, 0, 2 * Math.PI);
context.arc(305, 150, 5, 0, 2 * Math.PI);
context.fillStyle = 'white';
context.fill();

context.beginPath();
context.arc(285, 170, 5, 0, 1 * Math.PI);
context.fillStyle = 'red';
context.fill();
