/* 2.1 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. Замените булевое значение с минимальным индексом на строковое значение Булевый тип. Преобразованный массив выведите в консоль. Примечание: подразумевается решение без методов массивов, просто вспомним, как работать с массивами и циклами!
"values" = ["Строка",true,"Число","Объект","Не число",false]
"result" = ["Строка","Булевый тип","Число","Объект","Не число",false]
"values" = [false,false,true]
"result" = ["Булевый тип",false,true]
"values" = ["Строка","Число","Объект","Не число"]
"result" = ["Строка","Число","Объект","Не число"]
"values" = []
"result" = [] */

function printArray(values) {
    for (let index = 0; index < values.length; index++) {
          if (typeof values[index] != "boolean"){
          continue
      }
      else {
          values[index] = "Булевый тип";
          break;
      }
    }
  console.log(values);
}
printArray(values)

/* 2.2 В программе задана переменная partNumbers, которая хранит в себе массив. Каждый элемент массива является артикулом товара. Напишите программу, которая создаст новый массив на основе partNumbers. В новом массиве должны быть все элементы из partNumbers, которые заканчиваются на две цифры и два буквенных символа. Все остальные элементы необходимо отбросить. Значение нового массива выведите в консоль.
"partNumbers" = ["ER1234COM","FIV987451RU","GE123JO","P4321NO"]
"result" = ["FIV987451RU","GE123JO","P4321NO"]
"partNumbers" = ["EGH63FD54DF","EF5VGE344","FRGH34GR54FF","REGRGBE"]
"result" = ["EGH63FD54DF","FRGH34GR54FF"]
"partNumbers" = ["REGRG34FH","RGREEGT","354254","54GREG34FG"]
"result" = ["REGRG34FH","54GREG34FG"]
"partNumbers" = []
"result" = []*/

let regexp= /\d\d\D\D$/;

let newpn = [];
values = partNumbers;

function printArray(values) {
  	for (let value of values) {
    		if (regexp.test(value)) {
			newpn.push(value);
  		}
	}
	console.log(newpn);
}

printArray(values)

/* 2.3 В программе задана переменная layout, которая хранит в себе строковое значение. Данная строка содержит в себе часть HTML-верстки с числами. На основе значения layout сформируйте массив из чисел, которые встречаются в верстке. Если число четное, возведите его в квадрат, в ином случае оставьте без изменений. Полученный массив выведите в консоль. Если строка layout не содержит чисел, выведите пустой массив.
"layout" = "<p>10</p><p>14</p><p>23</p><p>43</p><p>98</p><p>101</p>"
"result" = [100,196,23,43,9604,101]
"layout" = "<div>10<span>14<p>25<p>39<p>8<p>101</p></p></p></p></span></div>"
"result" = [100,196,25,39,64,101]
"layout" = ""
"result" = []
"layout" = "<p>Привет друзья!</p>"
"result" = [] */

let numbers = layout.match(/\d+/g) || [];
numbers = numbers.map(el => {
  if (el % 2 === 0) {
    return el ** 2;
  } else {
    return +el;
  }
})
console.log(numbers)

/* 2.4 В программе задана переменная tasks, которая содержит массив. Элементы данного массива являются объектами с ключами title и completed. Сформируйте новый массив titles, который в качестве значений может хранить свойства title из всех значений массива tasks. Результат выведите в консоль.
"tasks" = [{"title":"Умыться","completed":true},{"title":"Сделать зарядку","completed":true},{"title":"Приготовить завтрак","completed":false}]
"result" = ["Умыться","Сделать зарядку","Приготовить завтрак"]
"tasks" = [{"title":"Сходить на работу"},{"title":"Обсудить детали нового проекта"},{"title":"Реализовать макет"}]
"result" = ["Сходить на работу","Обсудить детали нового проекта","Реализовать макет"]
"tasks" = []
"result" = [] */

let titles = tasks.map (e => e.title);

console.log(titles)

/* 2.5 В программе задана переменная values, которая хранит массив со строковыми и булевыми значениями. На основе массива values сформируйте новый массив result, который является фрагментом values. Новый массив должен начинаться с первого вхождения булевого значения и заканчиваться последним вхождением булевого значения в массив values. Выведите получившийся массив в консоль.
"values" = ["Строка",true,"Число","Объект","Не число",false,"Не объект"]
"result" = [true,"Число","Объект","Не число",false]
"values" = [true,"Число",false,"Не число",false,"Строка"]
"result" = [true,"Число",false,"Не число",false]
"values" = [true,"Число","Объект","Строка",false]
"result" = [true,"Число","Объект","Строка",false]
"values" = [true,false]
"result" = [true,false] */

let start = values.findIndex(el => typeof el === "boolean");
let end = values.findLastIndex(el => typeof el === "boolean");
let result = values.slice(start, end+1);
console.log(result);