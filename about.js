document.addEventListener('DOMContentLoaded', () => {
  // --- Завдання 1: підсвічування елементів списку ---
  const ulList = document.querySelector('.about__list-ul');

  ulList.onclick = function (event) {
    if (event.target.tagName === 'LI') {
      // Знімаємо попереднє підсвічування
      ulList.querySelectorAll('li').forEach(li => li.classList.remove('highlight'));
      // Додаємо підсвічування до поточного елемента
      event.target.classList.add('highlight');
    }
  };

  // --- Завдання 2: Меню з data-method ---
  const menuContainer = document.createElement('div');
  menuContainer.className = 'menu';

  const methods = ['delivery', 'warranty', 'consultations'];
  methods.forEach(method => {
    const btn = document.createElement('button');
    btn.textContent = method.toUpperCase();
    btn.dataset.method = method;
    menuContainer.appendChild(btn);
  });

  menuContainer.addEventListener('click', function (e) {
    const method = e.target.dataset.method;
    if (!method) return;

    switch (method) {
      case 'delivery':
        alert('Ви хочете замовити доставку?');
        break;
      case 'warranty':
        alert('Ви хочете прочитати про умови гарантій?');
        break;
      case 'consultations':
        alert('Вам потрібна допомога?');
        break;
    }
  });

  document.body.appendChild(menuContainer);

  // --- Завдання 3: Поведінка (behavior) ---
  const behaviorBlock = document.createElement('div');
  behaviorBlock.innerHTML = `
    <h3>Оцініть нас:</h3>
    <button data-behavior="like">👍 Щиро дякуємо</button>
    <button data-behavior="dislike">👎 Будемо кращими</button>
  `;

  behaviorBlock.addEventListener('click', function (e) {
    const behavior = e.target.dataset.behavior;
    if (!behavior) return;

    switch (behavior) {
      case 'like':
        alert('Ви вподобали!');
        break;
      case 'dislike':
        alert('Ви не вподобали!');
        break;
    }
  });

  document.body.appendChild(behaviorBlock);
});
