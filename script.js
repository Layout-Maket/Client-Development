// --- Завдання 2: Функція "Діалог з користувачем" ---
function dialogWithUser() {
  console.log("--- Початок діалогу з користувачем ---");
  let response;
  let attempts = 0;
  const maxAttempts = 3;

  // Цикл для отримання відповіді
  while (attempts < maxAttempts) {
      response = prompt(`Спроба ${attempts + 1}/${maxAttempts}: Введіть чи додаєте ви цей товар? ('так' або 'ні'):`);

      if (response === null) {
          alert("Діалог перервано користувачем.");
          console.log("Діалог перервано.");
          return; // Вихід з функції
      }

      // Умовне розгалуження
      if (response.toLowerCase() === 'так') {
          alert("Ви ввели 'так'. Чудово, дякую за покупку!");
          console.log("Користувач ввів 'так'");
          break; 
      } else if (response.toLowerCase() === 'ні') {
          alert("Ви ввели 'ні'. Зрозуміло.");
          console.log("Користувач ввів 'ні'");
          break; 
      } else {
          alert("Неправильне введення. Спробуйте ще раз.");
          attempts++;
      }
  }

  // Перевірка, чи вичерпано спроби
  if (attempts === maxAttempts) {
      alert("Ви вичерпали всі спроби введення.");
      console.log("Вичерпано спроби введення.");
  }

  console.log("--- Кінець діалогу з користувачем ---");
}

// --- Завдання 3: Функція виводу інформації про розробника ---
function displayDeveloperInfo(lastName, firstName, position = "Frontend розробник") {
  const info = `Інформація про розробника:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`;
  alert(info);
  console.log(info);
}

// --- Завдання 4: Функція порівняння двох рядків ---
function compareStrings(str1, str2) {
  console.log(`--- Порівняння рядків: "${str1}" та "${str2}" ---`);
  let longerString;

  if (str1.length > str2.length) {
      longerString = str1;
  } else if (str2.length > str1.length) {
      longerString = str2;
  } else {
      alert(`Рядки "${str1}" та "${str2}" мають однакову довжину.`);
      console.log("Рядки однакової довжини.");
      return;
  }

  alert(`Більший рядок: "${longerString}"`);
  console.log(`Більший рядок: "${longerString}"`);
}


// Переконуємось, що HTML повністю завантажено перед додаванням слухачів
document.addEventListener('DOMContentLoaded', (event) => {
  // Отримуємо посилання на кнопки за їх ID
  const btnDialog = document.getElementById('btnDialog');
  const btnDevInfo = document.getElementById('btnDevInfo');
  const btnCompare = document.getElementById('btnCompare');


  if (btnDialog) {
      btnDialog.addEventListener('click', dialogWithUser);
  }

  if (btnDevInfo) {
      btnDevInfo.addEventListener('click', function() {
          displayDeveloperInfo("Коваль", "Богдан");
      });
  }

  if (btnCompare) {
      btnCompare.addEventListener('click', function() {
          compareStrings("Короткий рядок", "Дуже-дуже довгий рядок для тесту");
      });
  }
});