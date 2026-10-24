// Контейнеры секций
const sections = {
  soup: document.getElementById('soups'),
  main: document.getElementById('mains'),
  drink: document.getElementById('drinks'),
};

// Создание карточки блюда
function createCard(dish) {
  const card = document.createElement('div');
  card.className = 'dish-card';
  card.dataset.dish = dish.keyword;

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