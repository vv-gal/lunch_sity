const dishes = [
  // ===== СУПЫ (6) =====
  { keyword: 'gaspacho', name: 'Гаспачо', price: 195, category: 'soup', kind: 'veg', count: '350 г', image: 'images/soups/gaspacho.jpg' },
  { keyword: 'mushroom_soup', name: 'Грибной суп-пюре', price: 185, category: 'soup', kind: 'veg', count: '300 г', image: 'images/soups/mushroom.jpg' },
  { keyword: 'borsch', name: 'Борщ', price: 210, category: 'soup', kind: 'meat', count: '400 г', image: 'images/soups/borsch.jpg' },
  { keyword: 'lapcha', name: 'Суп-лапша', price: 195, category: 'soup', kind: 'meat', count: '350 г', image: 'images/soups/lapcha.jpg' },
  { keyword: 'fish_soup', name: 'Рыбный суп', price: 220, category: 'soup', kind: 'fish', count: '350 г', image: 'images/soups/fish.jpg' },
  { keyword: 'tom_yam', name: 'Том Ям с креветками', price: 365, category: 'soup', kind: 'fish', count: '350 г', image: 'images/soups/tomyam.jpg' },

  // ===== ГЛАВНЫЕ БЛЮДА (6) =====
  { keyword: 'lasagna', name: 'Лазанья', price: 385, category: 'main', kind: 'meat', count: '300 г', image: 'images/mains/lasagna.jpg' },
  { keyword: 'fried_potato', name: 'Жареная картошка с грибами', price: 150, category: 'main', kind: 'veg', count: '250 г', image: 'images/mains/potato.jpg' },
  { keyword: 'steak', name: 'Стейк', price: 450, category: 'main', kind: 'meat', count: '200 г', image: 'images/mains/steak.jpg' },
  { keyword: 'fish_steak', name: 'Рыбный стейк', price: 420, category: 'main', kind: 'fish', count: '200 г', image: 'images/mains/fish.jpg' },
  { keyword: 'salmon', name: 'Лосось на гриле', price: 480, category: 'main', kind: 'fish', count: '180 г', image: 'images/mains/salmon.jpg' },
  { keyword: 'veggie_pasta', name: 'Паста с овощами', price: 320, category: 'main', kind: 'veg', count: '280 г', image: 'images/mains/pasta.jpg' },

  // ===== САЛАТЫ И СТАРТЕРЫ (6) =====
  { keyword: 'caesar', name: 'Цезарь с курицей', price: 280, category: 'salad', kind: 'meat', count: '200 г', image: 'images/salads/caesar.jpg' },
  { keyword: 'greek_salad', name: 'Греческий салат', price: 240, category: 'salad', kind: 'veg', count: '200 г', image: 'images/salads/greek.jpg' },
  { keyword: 'veg_salad', name: 'Овощной салат', price: 180, category: 'salad', kind: 'veg', count: '180 г', image: 'images/salads/veg.jpg' },
  { keyword: 'tuna_salad', name: 'Салат с тунцом', price: 310, category: 'salad', kind: 'fish', count: '200 г', image: 'images/salads/tuna.jpg' },
  { keyword: 'caprese', name: 'Капрезе', price: 260, category: 'salad', kind: 'veg', count: '170 г', image: 'images/salads/caprese.jpg' },
  { keyword: 'avocado_salad', name: 'Салат с авокадо', price: 290, category: 'salad', kind: 'veg', count: '190 г', image: 'images/salads/avocado.jpg' },

  // ===== НАПИТКИ (6) =====
  { keyword: 'orange_juice', name: 'Апельсиновый сок', price: 120, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/drinks/orange.png' },
  { keyword: 'apple_juice', name: 'Яблочный сок', price: 90, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/drinks/apple.png' },
  { keyword: 'carrot_juice', name: 'Морковный сок', price: 110, category: 'drink', kind: 'cold', count: '300 мл', image: 'images/drinks/carrot.png' },
  { keyword: 'tea', name: 'Чай', price: 80, category: 'drink', kind: 'hot', count: '250 мл', image: 'images/drinks/tea.jpg' },
  { keyword: 'coffee', name: 'Кофе', price: 100, category: 'drink', kind: 'hot', count: '200 мл', image: 'images/drinks/coffee.jpg' },
  { keyword: 'cocoa', name: 'Какао', price: 90, category: 'drink', kind: 'hot', count: '250 мл', image: 'images/drinks/cocoa.jpg' },

  // ===== ДЕСЕРТЫ (6) =====
  { keyword: 'icecream', name: 'Мороженое', price: 120, category: 'dessert', kind: 'small', count: '100 г', image: 'images/desserts/icecream.jpg' },
  { keyword: 'cheesecake', name: 'Чизкейк', price: 180, category: 'dessert', kind: 'small', count: '120 г', image: 'images/desserts/cheesecake.jpg' },
  { keyword: 'eclair', name: 'Эклер', price: 90, category: 'dessert', kind: 'small', count: '80 г', image: 'images/desserts/eclair.jpg' },
  { keyword: 'tiramisu', name: 'Тирамису', price: 220, category: 'dessert', kind: 'medium', count: '150 г', image: 'images/desserts/tiramisu.jpg' },
  { keyword: 'brownie', name: 'Брауни', price: 200, category: 'dessert', kind: 'medium', count: '140 г', image: 'images/desserts/brownie.jpg' },
  { keyword: 'cake', name: 'Торт шоколадный', price: 350, category: 'dessert', kind: 'large', count: '250 г', image: 'images/desserts/cake.jpg' },
];