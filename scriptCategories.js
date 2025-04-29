//Пункт 2

// Завдання 1: Змінити фон сторінки на 30 секунд
const originalBackgroundColor = document.body.style.backgroundColor;
document.body.style.backgroundColor = 'lightblue'; 

setTimeout(() => {
    document.body.style.backgroundColor = originalBackgroundColor;
    console.log('Фон сторінки відновлено.');
}, 3000); // 30000 мілісекунд = 30 секунд


// Завдання 2: Перенаправити браузер на іншу сторінку (розкоментуйте, щоб увімкнути)
// setTimeout(() => {
//     console.log('Перенаправлення на іншу сторінку...');
//     window.location.href = 'https://www.google.com'; 
// }, 5000);

// Завдання 3: Використання методу getElementById
const devInfoElement = document.getElementById('autor-text');
if (devInfoElement) {
    console.log('Знайдено елемент з ID "btnDevInfo":', devInfoElement);
    devInfoElement.textContent = 'Розроблено Bohdan Koval';
} 

// Завдання 4: Використання методу querySelectorAll
const allLinks = document.querySelectorAll('a'); // Знаходимо всі теги <a>
console.log(`Знайдено ${allLinks.length} посилань на сторінці.`);

allLinks.forEach((link, index) => {
    link.style.color = 'green'; // Змінюємо колір тексту на зелений
});


// Завдання 5: Використання властивостей DOM-вузла
const categoryItems = document.querySelectorAll('.categories__box');

const firstCategoryItem = categoryItems.length > 0 ? categoryItems[0] : null;
if (firstCategoryItem) {
    console.log('--- Властивості DOM-вузла (перший елемент категорії) ---');

    const resultContainer = document.createElement('div');
    resultContainer.style.marginTop = '20px';
    resultContainer.style.padding = '10px';
    resultContainer.style.border = '1px solid #ccc';
    resultContainer.style.backgroundColor = '#f9f9f9';


    resultContainer.innerHTML = `
    <h3>Інші версії:</h3>
    <p><strong>innerHTML:</strong></p>
    <div style="border:1px dashed #aaa; padding:5px; margin-bottom:10px;">${firstCategoryItem.innerHTML}</div>
    <p><strong>outerHTML:</strong></p>
    <div style="border:1px dashed #aaa; padding:5px;">${firstCategoryItem.outerHTML}</div>
    `;

    document.body.appendChild(resultContainer);

    console.log('outerHTML:', firstCategoryItem.outerHTML);

    console.log('textContent:', firstCategoryItem.textContent.trim().replace(/\s+/g, ' ')); // Очищаємо від зайвих пробілів

    // Знайдемо перший текстовий вузол всередині заголовка h6
    const titleElement = firstCategoryItem.querySelector('h6');
    if (titleElement && titleElement.firstChild && titleElement.firstChild.nodeType === Node.TEXT_NODE) {
        const textNode = titleElement.firstChild;
        console.log('nodeValue (першого текстового вузла в h6):', textNode.nodeValue.trim());
        console.log('data (першого текстового вузла в h6):', textNode.data.trim());
    } 
} 
