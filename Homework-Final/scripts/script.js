"use strict";

// 1. Создать квадратный div средствами JS и 
//при наведении курсора на него цвет div-а меняется на введенный пользователем через prompt 
//(вариант со * - цвет рандомно меняется, без пользовательского ввода, для этого можно 
//посмотреть в сторону нового метода Math.random())
// const color = prompt("Enter color for div (r for random)");
// const div = document.createElement("div");
// div.style.border = "1px solid black" 
// div.style.width = "200px";
// div.style.height = "200px";
// if (color !== 'r')
//     div.style.backgroundColor = color;
// else {
//     div.style. backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`; 
// }    
// document.body.append(div);

// 2. Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку 
// присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста 
// и цвет заднего фона местами. При повторном нажатии класс active удаляется.
// const cardContaner = document.createElement("div");
// cardContaner.style.display = "flex";
// for (let i = 0; i <10; i++){
//     const card = document.createElement("div");
//     card.style.width = "100px";
//     card.style.height = "100px";
//     card.style.border = "1px solid black" 
//     card.style.marginRight = "5px";
//     card.innerText = i + "";
//     card.addEventListener("click", () => card.classList.toggle("active"));
//     cardContaner.append(card);
// }
// document.body.append(cardContaner);

// 3. Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, 
// а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на 
// английский и обратно. 
// Подсказка. В каждой карточке должно быть два параграфа.
// В одном написано на русском, а во втором на английском и при нажатии на карточку 
// один параграф получает класс с display none а второй с display block.
// 4. В дополнение к предыдущей задаче: добавить внизу кнопки RU и EN при нажатии на 
// которые все карточки переключаются на русский или английский соответственно.
// const words = [
//     {en: 'dog', ru: 'собака'}, 
//     {en: 'cat', ru: 'кошка'}, 
//     {en: 'elephant', ru: 'слон'}, 
// ];
// const cardContaner = document.createElement("div");
// cardContaner.style.display = "flex";
// for (let i = 0 ; i < words.length; i++){
//     const card = document.createElement("div");
//     card.style.width = "100px";
//     card.style.height = "100px";
//     card.style.border = "1px solid black" 
//     card.style.padding = "5px";
//     card.style.textAlign = "center";
//     card.style.marginRight = "5px";
//     card.style.display = "flex";
//     card.style.alignItems = "center";
//     card.style.justifyContent = "center";
//     card.style.cursor = "pointer";
    
//     const p1 = document.createElement("p");
//     p1.innerText = words[i].en;
//     p1.classList.add("eng")
//     card.addEventListener("click", ()=>{ 
//         if (card.innerText === words[i].en) {
//             p1.innerText = words[i].ru;
//         }
//         else{
//             p1.innerText = words[i].en;
//         }
//     }
//         );
//     card.append(p1);
    
//     const p2 = document.createElement("p");
//     p2.innerText = words[i].ru;
//     p2.style.display = "none";
//     p2.classList.add("rus")
//     card.append(p2);
//     cardContaner.append(card);
// }
// document.body.append(cardContaner);

// const buttonRus = document.createElement("button");
// buttonRus.innerText = "RU";
// buttonRus.style.padding = "6px";
// document.body.append(buttonRus);
// buttonRus.addEventListener("click", () =>{
//     const cardsRus = cardContaner.querySelectorAll(".eng");
//     for (let i = 0; i < cardsRus.length; i++){
//         cardsRus[i].style.display = "none";
//     }
//     const cardsEng = cardContaner.querySelectorAll(".rus");
//     for (let i = 0; i < cardsEng.length; i++){
//         cardsEng[i].style.display = "inline";
//     }
// });

// const buttonEng = document.createElement("button");
// buttonEng.innerText = "EN";
// buttonEng.style.padding = "6px";
// buttonEng.addEventListener("click", () =>{
//     const cardsRus = cardContaner.querySelectorAll(".eng");
//     for (let i = 0; i < cardsRus.length; i++){
//         cardsRus[i].style.display = "inline";
//     }
//     const cardsEng = cardContaner.querySelectorAll(".rus");
//     for (let i = 0; i < cardsEng.length; i++){
//         cardsEng[i].style.display = "none";
//     }
// })
//document.body.append(buttonEng);


// 5. Написать программу, которая формирует на основе массива строк множество параграфов 
//и выводит их в интерфейс. При клике на парагараф текст должен меняться на звездочки. 
//При повторном клике мы должны вновь увидеть текст.
// const stringsArray = ["cat", "dog", "parrot", "monkey", "giraff"];
// for (let index = 0; index < stringsArray.length; index++) {
//     const paragraph = document.createElement("p");
//     paragraph.innerText = stringsArray[index];
//     paragraph.style.padding = "10px";
//     paragraph.style.cursor = "pointer";
//     paragraph.addEventListener("click", () => {
//         const oldtext = paragraph.innerText;
//         if (oldtext === stringsArray[index]){
//             paragraph.innerText = "*****";
//         }
//         else{
//             paragraph.innerText = stringsArray[index];
//         }    
//     });
//     document.body.append(paragraph);
    
// }


// 6. В js объявлен массив с ссылками на картинки. На основе этого массива формируется 
// множество маленьких картинок в верхней части интерфейса. 
// При нажатии на одну из картинок забирается ссылка на эту картинку 
// и в нижней части интерфейса отображается в большем размере. 
// Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.

// const imagesArray = ["https://static.abplive.com/wp-content/uploads/sites/2/2017/01/30201030/parrot.jpg", "https://feeds.abplive.com/onecms/images/uploaded-images/2023/02/24/f5ac894e02201d446f89da727b603c071677240398344410_original.jpg?impolicy=abp_cdn&imwidth=720", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg"];

// const div = document.createElement("div");
// const divZoom = document.createElement("div");

// const zoomImage = document.createElement("img");
// divZoom.append(zoomImage);
// zoomImage.style.width = "800px";
// zoomImage.style.position = "absolute";
// zoomImage.style.top = "300px";
// document.body.append(divZoom);
// for (let i = 0; i < imagesArray.length; i++){
//     const img = document.createElement("img");
//     img.src = imagesArray[i];
//     img.style.width = "200px";
//     img.style.marginRight = "10px";
//     img.style.cursor = "pointer";
//     img.addEventListener("click", () =>{
        
//         //img.style.width = "100%";
//         //img.style.position ="absolute";
//         zoomImage.src = imagesArray[i];
//     })
//     div.append(img);

// }
// div.style.display = "flex";
// document.body.append(div);


// 7. Доработать задачу с предыдущего урока (с книжным магазином) - вывести сформированные данные на страницу 
// (можно использовать тег article, внутрь положить заголовки, параграфы и тп). 
// Все элементы должны генерироваться через JS. У каждой карточки должна быть кнопка 
// “Добавить в корзину”, при клике на которую текст этой кнопки меняется на “Добавлено!”. 
// Посредством CSS и присвоения/удаления классов элементам Вы можете их стилизовать, 
// как и саму страницу Вашего магазина: подключить шрифты, добавить стили для обертки,
// которая будет держать в себе эти книжки и тп, на Ваш вкус. 


class Book{
    constructor(id,title, author, description, imageUrl, price, discount, isDiscounted){
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.discount = discount;
        this.isDiscounted = isDiscounted;
    }
    getLink(){
        return `/books/item-${this.id}`;
    }
    getPriceWithDiscount(){
        if (this.isDiscounted) return this.price - (this.price/100*this.discount);
        return this.price;
    }
}
const bookList = [new Book(1, "Mahabharata", "Unknown", "Description of indian philosophy main book","https://yogakosmos.de/wp-content/uploads/2017/01/C71_Mahabharata.jpg", 122.20, 10, true),
new Book(2, "Little Prince", "Antuan De Sent Exupery", "A story of little prince", "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1367545443i/157993.jpg", 40.00, 20, false),
new Book(3, "Философия Java", "Б. Эккель", "Описание зяыка Джава", "https://cdn.javarush.com/images/article/1204a272-0c51-4efb-9559-1d6df3ed674d/original.jpeg", 50.00, 10, true)
];


function printBookList(){
    for (let i = 0; i < bookList.length; i++) {
        const book = bookList[i];
        const article = document.createElement("article");
        article.style.display = "flex";

        const link = document.createElement("a");
        link.setAttribute("href", book.getLink());
        link.style.marginRight = "15px";
        link.style.marginBottom = "15px";

        const img = document.createElement("img");
        img.setAttribute("src", book.imageUrl);
        img.style.width = "100px";
        img.style.height = "150px";
        img.style.objectFit = "cover";
        
        link.append(img);
        article.append(link);

        const div = document.createElement("div");
        div.style.display = "flex";
        div.style.flexDirection = "column";

        const h2 = document.createElement("h2");
        h2.innerText = `${book.id}. ${book.author} "${book.title}"`;
        div.append(h2);

        const p = document.createElement("p");
        
        p.innerText = `$${book.getPriceWithDiscount()}`;
        p.style.margin = "5px";
        div.append(p);

        const button = document.createElement("button");
        button.innerText = "Добавить в корзину";
        button.style.width = "200px";
        button.style.padding = "5px";
        button.addEventListener("click", () =>{ button.innerText = "Добавлено!"})
        div.append(button);
        
        article.append(div);
        
        document.body.append(article); 
    }
}

printBookList();




