// Хранилище выбранных блюд
const selected = {
  soup: null,
  main: null,
  salad: null,
  drink: null,
  dessert: null,
};

const orderList = document.getElementById('order-list');
const orderTotal = document.getElementById('order-total');

// Добавление блюда
function addToOrder(keyword) {
  const dish = dishes.find(d => d.keyword === keyword);
  if (!dish) return;

  selected[dish.category] = dish;

  // Подсветка карточки
  document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('selected'));
  const card = document.querySelector(`[data-dish="${keyword}"]`);
  if (card) card.classList.add('selected');

  updateOrder();
}

// Обновление блока «Ваш заказ»
function updateOrder() {
  const empty = !selected.soup && !selected.main && !selected.salad && !selected.drink && !selected.dessert;

  if (empty) {
    orderList.innerHTML = '<p class="empty-order">Ничего не выбрано</p>';
    orderTotal.innerHTML = '';
    return;
  }

  let total = 0;
  let html = '';

  // Суп
  if (selected.soup) {
    html += `<p><strong>Суп</strong><br>${selected.soup.name} ${selected.soup.price}₽</p>`;
    total += selected.soup.price;
  } else {
    html += `<p><strong>Суп</strong><br>Блюдо не выбрано</p>`;
  }

  // Главное блюдо
  if (selected.main) {
    html += `<p><strong>Главное блюдо</strong><br>${selected.main.name} ${selected.main.price}₽</p>`;
    total += selected.main.price;
  } else {
    html += `<p><strong>Главное блюдо</strong><br>Блюдо не выбрано</p>`;
  }

  // Салат или стартер
  if (selected.salad) {
    html += `<p><strong>Салат или стартер</strong><br>${selected.salad.name} ${selected.salad.price}₽</p>`;
    total += selected.salad.price;
  } else {
    html += `<p><strong>Салат или стартер</strong><br>Блюдо не выбрано</p>`;
  }

  // Напиток
  if (selected.drink) {
    html += `<p><strong>Напиток</strong><br>${selected.drink.name} ${selected.drink.price}₽</p>`;
    total += selected.drink.price;
  } else {
    html += `<p><strong>Напиток</strong><br>Напиток не выбран</p>`;
  }

  // Десерт
  if (selected.dessert) {
    html += `<p><strong>Десерт</strong><br>${selected.dessert.name} ${selected.dessert.price}₽</p>`;
    total += selected.dessert.price;
  } else {
    html += `<p><strong>Десерт</strong><br>Десерт не выбран</p>`;
  }

  orderList.innerHTML = html;
  orderTotal.innerHTML = `<p><strong>Стоимость заказа</strong><br>${total}₽</p>`;
}

// Сброс формы
document.getElementById('order-form').addEventListener('reset', () => {
  selected.soup = null;
  selected.main = null;
  selected.salad = null;
  selected.drink = null;
  selected.dessert = null;
  document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('selected'));
  updateOrder();
});

// Отправка формы — проверка ланча + hidden-поля
document.getElementById('order-form').addEventListener('submit', (e) => {
  const hasSoup = !!selected.soup;
  const hasMain = !!selected.main;
  const hasSalad = !!selected.salad;
  const hasDrink = !!selected.drink;

  // Ничего не выбрано
  if (!hasSoup && !hasMain && !hasSalad && !hasDrink) {
    e.preventDefault();
    showNotification('Ничего не выбрано. Выберите блюда для заказа');
    return;
  }

  // Нет напитка
  if (!hasDrink) {
    e.preventDefault();
    showNotification('Выберите напиток');
    return;
  }

  // Выбран суп, но нет главного/салата
  if (hasSoup && !hasMain && !hasSalad) {
    e.preventDefault();
    showNotification('Выберите главное блюдо/салат/стартер');
    return;
  }

  // Выбран салат, но нет супа/главного
  if (hasSalad && !hasSoup && !hasMain) {
    e.preventDefault();
    showNotification('Выберите суп или главное блюдо');
    return;
  }

  // Выбран только напиток (и/или десерт)
  if (hasDrink && !hasSoup && !hasMain && !hasSalad) {
    e.preventDefault();
    showNotification('Выберите главное блюдо');
    return;
  }

  // Проверка на валидный ланч (один из 5 вариантов)
  const isValidCombo =
    (hasSoup && hasMain && hasSalad && hasDrink) || // вариант 1
    (hasSoup && hasMain && hasDrink && !hasSalad) || // вариант 2
    (hasSoup && hasSalad && hasDrink && !hasMain) || // вариант 3
    (hasMain && hasSalad && hasDrink && !hasSoup) || // вариант 4
    (hasMain && hasDrink && !hasSoup && !hasSalad);  // вариант 5

  if (!isValidCombo) {
    e.preventDefault();
    showNotification('Выберите главное блюдо');
    return;
  }

  // добавляем скрытые поля
  document.querySelectorAll('input[type="hidden"]').forEach(i => i.remove());

  for (const category in selected) {
    if (selected[category]) {
      const hidden = document.createElement('input');
      hidden.type = 'hidden';
      hidden.name = category;
      hidden.value = selected[category].keyword;
      e.target.append(hidden);
    }
  }
});