// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.
const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const input = document.querySelector('.input');
const inputText = document.querySelector('.inputText');
const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

function addItem() {
    initialData.forEach(element => {
        const reviewItem = document.createElement('li');
        const h2 = document.createElement('h2');
        h2.textContent = element.product
        reviewItem.appendChild(h2);
        element.reviews.forEach(el => {
            // const id = document.createElement('p');
            // id.textContent = 'id:' + el.id;
            const text = document.createElement('p');
            text.textContent = 'Отзыв: ' + el.text;
            // reviewItem.append(id);
            reviewItem.appendChild(text);
        });

        box.appendChild(reviewItem);

    });
}

addItem();

function validReview(text) {
    let flag = false;
    if (text.trim().length > 50 && text.trim().length < 500) {
        flag = true;
    } else {
        throw new Error('некорректная длина отзыва');
    }
    return flag;
}

function addData(product, review) {
    // validReview(review);
    let flag = false;
    initialData.forEach(element => {
        if (product === element.product) {
            const itemProduct = {
                id: "4",
                text: review,
            }
            element.reviews.push(review);
            flag = true;
        }
    });
    if (!flag) {
        const item = {
            product: product,
            reviews: [
                {
                    id: "4",
                    text: review,
                },
            ],
        }
        initialData.push(item);
    }
}
function RenderData(product, review) {

    const reviewItem = document.createElement('li');
    const h2 = document.createElement('h2');
    h2.textContent = product
    reviewItem.appendChild(h2);
    const text = document.createElement('p');
    text.textContent = 'Отзыв: ' + review;
    reviewItem.appendChild(text);
    box.appendChild(reviewItem);
}

btn.addEventListener('click', () => {
    validReview(inputText.value);
    addData(input.value, inputText.value);
    RenderData(input.value, inputText.value)
});

