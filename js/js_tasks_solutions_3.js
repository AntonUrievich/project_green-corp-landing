/* 6.2 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas два горизонтальных отрезка длиной 100.
Координаты первого отрезка: точка 1: x = 100, y = 100; точка 2: x = 200, y = 100.
Координаты второго отрезка: точка 1: x = 100, y = 150; точка 2: x = 200, y = 150. */

let canvas = document.getElementById("root");
let ctx = canvas.getContext("2d");
ctx.fillRect(0, 0, 100, 65);

/* 6.3 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas три отрезка разных цветов. Первый отрезок красного #e74c3c цвета, второй — зеленого #16a085 цвета, а третий — синего #2980b9 цвета. */

let canvas = document.getElementById("root");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 100);
ctx.strokeStyle = '#e74c3c';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 125);
ctx.lineTo(200, 125);
ctx.strokeStyle = '#16a085';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 150);
ctx.lineTo(200, 150);
ctx.strokeStyle = '#2980b9';
ctx.stroke();

/* 6.4 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas четыре квадрата fillRect разных цветов с указанными на картинке размерами и отступами.

Левый верхний квадрат: #ff3d00
Правый верхний квадрат: #0bdd38
Левый нижний квадрат: #2e77da
Правый нижний квадрат: #ffd200 */

let canvas = document.getElementById("root");
let ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.fillStyle = '#ff3d00';
ctx.fillRect(10, 10, 100, 100);
ctx.fillStyle = '#0bdd38';
ctx.fillRect(120, 10, 100, 100);
ctx.fillStyle = '#2e77da';
ctx.fillRect(10, 120, 100, 100);
ctx.fillStyle = '#ffd200';
ctx.fillRect(120, 120, 100, 100);

/* 6.5 В программе задана переменная ctx, которая содержит контекст canvas элемента. Отрисуйте в canvas 50 окружностей c центром в точке 150:150 и радиусом от 2 до 100. Для решения данной задачи воспользуйтесь циклом. */

let canvas = document.getElementById("root");
let ctx = canvas.getContext("2d");
let radius = 2;
for (let index = 0; index < 50; index++) {
  ctx.beginPath();
  ctx.arc(150, 150, radius, 0, 2 * Math.PI);
  ctx.fill();
  radius +=2;
}

/* 6.6 В программе задана переменная ctx, которая содержит контекст canvas элемента. Напишите программу, которая отрисовывает круги при движении мышью по canvas (для получения координат мыши используйте offsetX и offsetY). Для решения задачи воспользуйтесь методом addEventListener у объекта document. */

document.addEventListener('mousemove', e =>{
	ctx.beginPath();
	ctx.arc(e.offsetX, e.offsetY, 50, 0, 2 *Math.PI);
	ctx.fill();
});