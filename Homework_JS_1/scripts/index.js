// 1. Написать программу, которая получает два числа и выводит информацию:
// –- если первое число больше, то “Первое число больше второго”
// –- если второе число больше, то “Второе число больше первого”
// –- если числа равны, то информацию о том, что они равны.
// ДОПОЛНИТЕЛЬНО: можно добавить проверку, а числа ли вообще мы получили от пользователя.
// let a = prompt("Введите число 1");
// let b = prompt("Введите число 2");

// if (a == +a && b == +b){
//     if (a > b){
//         console.log("Первое число больше второго");
//     }
//     if (a < b){
//         console.log("Второе число больше первого");
//     }
//     if (a === b){
//         console.log("Числа равны");
//     }
// }
// else
//     console.log("Введено неверное значение, не число.")


// 2.    Объявите две переменные: admin и username. Запишите строку со своим именем в переменную username. 
// Скопируйте значение из переменной username в admin. Выведите в консоль значение admin.
let username = "Сергей";
let admin;
admin = username;
console.log(admin);

// 3. Сравните строки (больше/меньше): "оливье" и "ананас", "кодировка" и "котировка", "22" и "222". 
//Опишите в комментариях, почему получился именно такой результат.
// console.log("оливье" > "ананас"); // true. "оливье" больше, тк первая различающаяся буква "о" больше "а". Яваскрипт сравнивает строки посимвольно, вес буквам присваивается в алфавитном порядке
// console.log("кодировка" > "котировка"); // false. Буква "д" в алфавите раньше, чем "т"
// console.log("22" > "222"); // false. Строка, у которой длинна больше, всегда больше.

// // 4. Напишите программу, которая считывает значение из prompt и выводит фразу “Это значение можно преобразовать в число” или “Это значение преобразовать в число не получится. Получится NaN”
// let value = prompt("Enter a value:");
// if (isNaN(value)) {
//   console.log("This value cannot be converted to a number. Result is NaN (Not-a-Number)");
// } else {
//   console.log("This value can be converted to a number");
// }


// 5. Написать цикл, который выводит только четные числа массива (подсказка: посмотрите в сторону математических операций и взятия остатка от деления).
let array = [10, 20, 3, 55, 100, -1, 23, -2];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}


// 6. Задача со *: Вывести значения произвольного массива (например, Ваши любимые музыкальные исполнители) справа налево с шагом два
let myFavMusic = ["Roma Khrapko", "Salomo", "Prajescu", "Ted Amber", "Len Lewis", "Gene on Earth", "Cirkel Square"];
for (let i = myFavMusic.length-1; i >= 0; i--) {
    if (i % 2 == 0){
        console.log(myFavMusic[i]);
    }
}
// 7. Найти сумму четных и нечетных чисел из массива и вывести разницу между ними. Вычесть из большего меньшее.
let array2 = [2, 6, 7, 13, 25, 00, 1, 4, 2];
let sumOdd = 0, sumEven = 0;
for (let i = 0; i < array2.length; i++){
    if (array2[i] % 2 == 0)  sumEven += array2[i]; 
    else sumOdd += array2[i];
}
let difference = (sumEven > sumOdd) ? sumEven - sumOdd : sumOdd - sumEven;
console.log("Разница сумм четных (" + sumOdd + ") и нечетных (" + sumEven + ") элементов массива [" + array2 +"] - " + difference);


// 8. Написать программу, состоящую из 2 последовательных циклов (идут друг за другом), которая обрабатывает массив из чисел (числа могут быть произвольные, длина массива должна быть от 20 элементов). 
// Условия первого цикла: если значение элемента на 0 позиции больше 10, нужно удалить его и добавить в конец массива, предварительно умножив на 2. 
// Условия второго цикла: если значение элемента на последней позиции больше 25, нужно удалить его с этой позиции и добавить в начало, предварительно вычитая из него 25. Если в результате вычитания получится число меньше или равное 0, то добавляем 0 вместо полученного числа. 
// После выполнения поставленной задачи вывести полученный итоговый массив в консоль.
let array3 = [15, 2, 0, 1, 18, 3, 15, 20, 21, 78, 3, 2, 78, 10, 11, 7, 9, 10, 2, 7, 12, 0];
let change;
console.log("Start array: " + array3);
for (let i = 0; i < array3.length; i++){
    if (array3[0] > 10) {
        change = array3[i];
        array3.shift(); //удалить первый элемент массива
        array3[array3.length-1] = change * 2;
    }    
}
console.log("Array after first cycle: " + array3);

for (let i = 0; i < array3.length; i++){
     if (array3[array3.length-1] > 25) {
         change = array3[array3.length-1];
         array3.pop(); // удалить последний элемент массива
         array3.unshift((change - 25 <= 0) ? 0 : change - 25);
     }    
}
console.log("Array after second cycle: " + array3);



