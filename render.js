// Контейнеры секций
const sections = {
  soup: document.getElementById('soups'),
  main: document.getElementById('mains'),
  salad: document.getElementById('salads'),
  drink: document.getElementById('drinks'),
  dessert: document.getElementById('desserts'),
};

// Создание карточки блюда
function createCard(dish) {
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.dataset.dish = dish.keyword;
  card.dataset.kind = dish.kind;

  card.innerHTML = `
    <img src="${dish.image}" alt="${dish.name}">
    <p class="price">${dish.price}₽</p>
    <p class="name">${dish.name}</p>
    <p class="weight">${dish.count}</p>
    <button class="add-btn">Добавить</button>
  `;

  card.querySelector('.add-btn').addEventListener('click', () => addToOrder(dish.keyword));

  return card;
}

// Сортировка по алфавиту и вывод
function renderDishes() {
  const sorted = [...dishes].sort((a, b) => a.name.localeCompare(b.name, 'ru'));

  sorted.forEach(dish => {
    const card = createCard(dish);
    sections[dish.category].append(card);
  });
}

renderDishes();

// фильтрация

document.querySelectorAll('.filters').forEach(block => {
  const category = block.dataset.category;

  block.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
      const kind = btn.dataset.kind;
      const isActive = btn.classList.contains('active');

      // Снимаем active со всех кнопок этой категории
      block.querySelectorAll('button').forEach(b => b.classList.remove('active'));

      const cards = sections[category].querySelectorAll('.dish-card');

      if (isActive) {
        // Повторный клик — показываем все
        cards.forEach(card => card.style.display = '');
      } else {
        // Новый фильтр
        btn.classList.add('active');
        cards.forEach(card => {
          card.style.display = card.dataset.kind === kind ? '' : 'none';
        });
      }
    });
  });
});