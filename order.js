// Хранилище выбранных блюд
const selected = {
  soup: null,
  main: null,
  drink: null,
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
  const empty = !selected.soup && !selected.main && !selected.drink;

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

  // Напиток
  if (selected.drink) {
    html += `<p><strong>Напиток</strong><br>${selected.drink.name} ${selected.drink.price}₽</p>`;
    total += selected.drink.price;
  } else {
    html += `<p><strong>Напиток</strong><br>Напиток не выбран</p>`;
  }

  orderList.innerHTML = html;
  orderTotal.innerHTML = `<p><strong>Стоимость заказа</strong><br>${total}₽</p>`;
}

// Сброс формы
document.getElementById('order-form').addEventListener('reset', () => {
  selected.soup = null;
  selected.main = null;
  selected.drink = null;
  document.querySelectorAll('.dish-card').forEach(c => c.classList.remove('selected'));
  updateOrder();
});

// Отправка формы — добавляем keyword'
document.getElementById('order-form').addEventListener('submit', (e) => {
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