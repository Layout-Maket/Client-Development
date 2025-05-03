// --- Завдання 1 ---
// Використати одну з подій миші (click)
// Написати функцію-обробник
// Призначити функцію-обробник події через атрибут

function handleClickAttr() {
  alert('Ти хочеш купити Apple iPad?');
}

// --- Завдання 2 ---
// Призначити функцію-обробник події через властивість (element.onclick)

document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.categories__item-btn');

  if (btns.length < 4) {
    console.warn('Потрібно щонайменше 4 кнопки для демонстрації завдання.');
    return;
  }

  // 1. Кнопка №1 — через HTML-атрибут (onclick="...")
  // Призначаємо програмно атрибут onclick
  btns[0].setAttribute('onclick', 'handleClickAttr()');


  // --- Завдання 3 ---
  // Призначити функцію-обробник події через властивість
  btns[1].onclick = function () {
    alert('Ти хочеш купити Michelin Agilis 225/65R16C?');
  };


  // --- Завдання 4 ---
  // Використати метод addEventListener
  // Призначити одній події різні обробники (написати функції-обробники)

  function handlerOne() {
    console.log('Заголовок RMY Grailz Project G/R худі');
  }

  function handlerTwo() {
    console.log('Опис: Стильна модель з двоколірним дизайном, поєднуючи сірий і білий кольори. Має зручний застібку-зіп з двостороннім доступом для легкого одягання та знімання. Виготовлена з високоякісного матеріалу, який забезпечує комфорт під час носіння.');
  }

  btns[2].addEventListener('click', handlerOne);
  btns[2].addEventListener('click', handlerTwo);


  // --- Завдання 5 ---
  // Призначити обробником події об’єкт за допомогою addEventListener
  // Застосувати метод handleEvent
  // Вивести елемент, на якому спрацював обробник, використовуючи event.currentTarget

  const customHandler = {
    handleEvent(event) {
      alert('Товари: Гантелі металеві розбірні!');
      console.log('Поточний елемент (event.currentTarget):', event.currentTarget);
    }
  };

  btns[3].addEventListener('click', customHandler);


  // --- Завдання 6 ---
  // Видалити об’єкт, використовуючи removeEventListener

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Вимкнити друк заголовка';
  removeBtn.style.marginTop = '20px';
  removeBtn.style.padding = '10px';
  removeBtn.style.background = 'red';
  removeBtn.style.color = 'white';

  // Цей обробник видаляє handlerOne з кнопки №3
  removeBtn.addEventListener('click', () => {
    btns[2].removeEventListener('click', handlerOne);
    alert('Обробник 1 видалено!');
  });

  document.body.appendChild(removeBtn);
});
