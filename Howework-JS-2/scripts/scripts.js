"use strict"
// 1. Написать результат выполнения выражения и пояснить в комментариях к коду, почему результат именно такой:
// 1.1 "Winter" || "Summer" && "Srping" || "Autumn"
// -- Спервая выполняется блок ИИ, который вернет Spring,  как последнее значение, если не найдено ни одно ложное
// -- Далее выполяются все ИЛИ слева направо. Вычисление останваливается при достижении первого истинного значения Winter
//console.log("Winter" || "Summer" && "Srping" || "Autumn");

// 1.2. ("Winter" || "Summer") && ("Srping" || "Autumn")
// Сначала выполнятся операции в скобках. Результаты дадут слева Winter, справа Spring, как первые истинные. WiInter && Spring = Spring как последнее истинное
//console.log(("Winter" || "Summer") && ("Srping" || "Autumn"));

// 1.3. !"" && !505 && !!0 && !"Hello!" = true && false && false && false = false
//Сначала выполнятся все операторы НЕ, число с оператором ! дает false. !!0 = false  - ноль, это false, он преобразуется в true, затем чеще раз в false. Строка с оператором !  дает false, тк сама строка является каким то значениме, то есть true, делаем отрицанием, получаем false
//console.log(!"" && !505 && !!0 && !"Hello!");

// 1.4. !!(!"" && !505 && !!0 && !"Hello!") = !!(true && false && false && false) = !!(false) = false
//console.log(!!(!"" && !505 && !!0 && !"Hello!"));

// 1.5.  "Как дела?" && (!505 && !!0) || "Hello!" = "Как дела?" &&  (false && false) || "Hello!" = "Как дела?" && false || "Hello!" = false || "Hello!" = "Hello!"
// Сначала выполнятся отрицания, потом в скобках, потом ИИ как более приоритетный и последний даст строку хэллоу как единственную положительную из двух.
//console.log("Как дела?" && (!505 && !!0) || "Hello!");

// 1.6.  (false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка") = (false || false || 2023) && !(false) = 2023 && true = true
// Последняя операция - если все операторы истинны, то возвращается последний
// console.log((false || "Новая строка" && "" || 2023) && !(0 && 10 && "Еще одна строка"));

// 1.7. false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка" = false || "Новая строка" && "" || 2023 && true && 10 && "Еще одна строка" =
// = false || "" ||  "Еще одна строка" = "Еще одна строка"
// console.log(false || "Новая строка" && "" || 2023 && !0 && 10 && "Еще одна строка");
// Все операции вычислил сначала теоретически, 100% подтвердилось :)


// 2. Написать функцию hasProp, которая принимает в себя объект и название ключа. Если ключа с таким названием нет в объекте, функция возвращает false. Если ключ есть, функция возвращает значение этого ключа. 

function isKeyInObject(object, keySearch){
    for (let key in object){
        if (key === keySearch) return true;
    }
    return false;
}
let robot = {
    robotname : "Suzuki",
    hasWings : true,
    speed : 100
}
console.log(isKeyInObject(robot, "speed"));

// 3. Написать функцию поиска адреса(города) пользователя по его id. У Вас должен быть массив из пользователей (2-3 элемента достаточно) со свойствами id, username, address. Также должна быть отдельная функция (не метод объекта), которая принимает в себя id, находит пользователя по этому id в массиве и возвращает его адрес. Если пользователь с таким айди не найден, функция должна вернуть сообщение “Извините, такого пользователя не существует”.

const userList = [
    {id : 1, username : "Carl", address : "123567, Berlin, Friedrichstrase, 6"},
    {id : 2, username : "Dasha", address : "123567, Tallin, Some nice street, 1"},
    {id : 3, username : "Sergii", address : "53424, Remagen, Krummen Morgen, 9"}
];
function getUserAddress(id, array){
    for (let i = 0; i < array.length; i++){
        if (array[i].id === id) return array[i].address;
    }
    return "Извините, такого пользователя не существует";
}
console.log(getUserAddress(5, userList));

//4. Написать процесс для подготовки вывода информации из интернет-магазина книг на экран. Пока что работаем со скриптом, он обязательно должен содержать массив из объектов (моделей) с книгами.Каждая модель книги представляет из себя набор данных:
// -- id
// -- Заголовок
// -- Автор
// -- Короткое описание
// -- Фотография (ссылка на фото)
// -- Стоимость
// -- Есть ли на книгу скидка сейчас?
// -- Метод для формирования ссылки на книгу (ниже приведен пример шаблона ссылки)
// -- Метод для расчета итоговой стоимости со скидкой (размер скидки может отличаться у разных книг)

// Для каждой модели нужно вывести из массива наших книг все данные пока что в консоль:
// заголовок
// автор
// описание
// фотография
// ссылка (формируется по следующему шаблону: books/item-${id}). Пока что сама ссылка никуда не будет вести, но этого достаточно для практики
// стоимость: если книга находится на скидках, вывести нужно стоимость со скидкой. Иначе - обычную

const bookList = [
    {id : 1, 
    title : "Mahabharata", 
    author : "Unknown", 
    description : "Description of indian philosophy main book", 
    imageUrl : "/images/m000001.jpg", 
    price : 122.20, 
    discount : 0,
    isDiscounted : false,
    getLink() { return `books/item-${this.id}`;},
    getFinalPrice(){
        if (this.isDiscounted) return this.price - (this.price/100*this.discount);
        else return this.price;
    }},
    {id : 2, 
        title : "Little Prince", 
        author : "Antuan De Sent Exupery", 
        description : "A story of little prince", 
        imageUrl : "/images/lm000002.jpg", 
        price : 20.00, 
        discount : 10,
        isDiscounted : true,
        getLink() { return `books/item-${this.id}`;},
        getFinalPrice(){
            if (this.isDiscounted) return this.price - (this.price/100*this.discount);
            else return this.price;
        }},    
        {id : 3, 
            title : "Goblet of Fire", 
            author : "J.K Rowling", 
            description : "A story of Garry Potter", 
            imageUrl : "/images/lm000003.jpg", 
            price : 80.00, 
            discount : 20,
            isDiscounted : true,
            getLink() { return `books/item-${this.id}`;},
            getFinalPrice(){
                if (this.isDiscounted) return this.price - (this.price/100*this.discount);
                else return this.price;
            }},        

];
 function printBookList(list){
    for (let i = 0; i < list.length; i++){
        console.log(`${list[i].id}, ${list[i].title}, ${list[i].author}, ${list[i].description}, ${list[i].imageUrl}, ${list[i].getLink()}, ${list[i].getFinalPrice()}`);
    }   
 }
printBookList(bookList);

//console.log(bookList[0].getFinalPrice());
        


