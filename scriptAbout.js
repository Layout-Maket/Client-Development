document.write('<h1>Допомога (динамічно додано)!</h1>');


// 1. document.createElement та document.createTextNode
const newHeading = document.createElement('h4'); // Створюємо новий елемент <h4>
const headingText = document.createTextNode('Сервіси які ми пропонуємо (динамічно додано)'); // Створюємо текстовий вузол
newHeading.appendChild(headingText); // Додаємо текст до заголовка

const section = document.querySelector('section .container');

// 2. node.append (Додає вузли або рядки в кінець батьківського елемента)
if (section) {
  section.append(newHeading, ' <- Безкоштовна доставка кур`єром (динамічно додано)');
}

// 3. node.prepend (Додає вузли або рядки на початок батьківського елемента)
const prependText = document.createElement('p');
prependText.textContent = 'Нові акції. (динамічно додано)';
prependText.style.color = 'blue';
if (section) {
  section.prepend(prependText);
}

// --- Вставка відносно інших вузлів ---

const aboutInnerDiv = document.querySelector('.about__inner');

// 4. node.after (Вставляє вузли або рядки після вказаного вузла)
if (aboutInnerDiv) {
  const afterElement = document.createElement('hr'); // Створюємо горизонтальну лінію
  aboutInnerDiv.after(afterElement, 'Розстрочка (динамічно додано)');
}

// 5. node.before (Вставляє вузли або рядки перед вказаним вузлом - аналогічно до after)
const orderedList = document.querySelector('.about__list-ol');
if (orderedList) {
    const beforeElement = document.createElement('p');
    beforeElement.textContent = 'Наші переваги (динамічно додано)';
    beforeElement.style.fontStyle = 'italic';
    orderedList.before(beforeElement);
}


// 6. node.replaceWith (Замінює вузол іншими вузлами або рядками)
const authorText = document.getElementById('autor-text'); // Знаходимо елемент за ID
if (authorText) {
  const newAuthorElement = document.createElement('strong');
  newAuthorElement.textContent = 'Автор змінений: Bohdan Koval (динамічно додано)';
  authorText.replaceWith(newAuthorElement, ' (замінено за допомогою replaceWith)');
}

// 7. node.remove (Видаляє вузол)
const definitionList = document.querySelector('dl');
if (definitionList) {
    const removalNotice = document.createElement('p');
    removalNotice.textContent = 'Список <dl> буде видалено. (динамічно видалено)';
    removalNotice.style.color = 'orange';
    definitionList.before(removalNotice);

    definitionList.remove();
    console.log('Елемент <dl> видалено.');
}


console.log('DOM маніпуляції завершено!');