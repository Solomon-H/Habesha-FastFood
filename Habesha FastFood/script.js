const coldDrinks = [
    { id: 1, name: 'Coca-Cola', price: 2.50, quantity: '350ml' },
    { id: 2, name: 'Sprite', price: 2.00, quantity: '350ml' },
    { id: 3, name: 'Fanta', price: 2.25, quantity: '350ml' },
    { id: 4, name: 'Pepsi', price: 2.00, quantity: '350ml' },
    { id: 5, name: 'Mountain Dew', price: 2.25, quantity: '350ml' },
    { id: 6, name: '7UP', price: 2.00, quantity: '350ml' },
    { id: 7, name: 'Mirinda', price: 2.25, quantity: '350ml' },
    { id: 8, name: 'Lemonade', price: 2.00, quantity: '350ml' },
  ];
  
  const hotDrinks = [
    { id: 11, name: 'Coffee', price: 2.00, quantity: 'Regular' },
    { id: 12, name: 'Tea', price: 1.50, quantity: 'Regular' },
    { id: 13, name: 'Hot Chocolate', price: 2.25, quantity: 'Regular' },
    { id: 14, name: 'Espresso', price: 2.50, quantity: 'Regular' },
    { id: 15, name: 'Cappuccino', price: 2.75, quantity: 'Regular' },
    { id: 16, name: 'Latte', price: 3.00, quantity: 'Regular' },
    { id: 17, name: 'Mocha', price: 3.25, quantity: 'Regular' },
    { id: 18, name: 'Chai Tea', price: 2.75, quantity: 'Regular' },
  ];
  
  const sandwiches = [
    { id: 21, name: 'Chicken Sandwich', price: 4.50, quantity: 'Single' },
    { id: 22, name: 'Veggie Sandwich', price: 3.50, quantity: 'Single' },
    { id: 23, name: 'Turkey Sandwich', price: 4.25, quantity: 'Single' },
    { id: 24, name: 'BLT Sandwich', price: 3.75, quantity: 'Single' },
    { id: 25, name: 'Tuna Salad Sandwich', price: 4.00, quantity: 'Single' },
    { id: 26, name: 'Grilled Cheese Sandwich', price: 3.00, quantity: 'Single' },
    { id: 27, name: 'Ham and Cheese Sandwich', price: 4.00, quantity: 'Single' },
    { id: 28, name: 'Club Sandwich', price: 5.00, quantity: 'Single' },
    { id: 29, name: 'Roast Beef Sandwich', price: 4.75, quantity: 'Single' },
    { id: 30, name: 'Egg Salad Sandwich', price: 3.25, quantity: 'Single' },
  ];
  
  const kidsFood = [
    { id: 31, name: 'Chicken Nuggets', price: 3.00, quantity: '6 pcs' },
    { id: 32, name: 'Cheese Pizza', price: 4.00, quantity: 'Small' },
    { id: 33, name: 'Hot Dog', price: 2.50, quantity: 'Single' },
    { id: 34, name: 'Macaroni and Cheese', price: 3.25, quantity: 'Small' },
    { id: 35, name: 'Peanut Butter and Jelly Sandwich', price: 2.75, quantity: 'Single' },
    { id: 36, name: 'Mini Burgers', price: 4.50, quantity: '3 pcs' },
  ];
  
  const kidsDrinks = [
    { id: 41, name: 'Fruit Juice', price: 1.50, quantity: '250ml' },
    { id: 42, name: 'Chocolate Milk', price: 2.00, quantity: '250ml' },
    { id: 43, name: 'Apple Juice', price: 1.25, quantity: '250ml' },
    { id: 44, name: 'Orange Juice', price: 1.50, quantity: '250ml' },
    { id: 45, name: 'Strawberry Milk', price: 2.25, quantity: '250ml' },
  ];
 
  function displayMenuItems(menuList, menuId) {
    const ulElement = document.getElementById(menuId);
    menuList.forEach(item => {
      const liElement = document.createElement('li');
      liElement.innerHTML = `<span>${item.name}</span><span class="price">$${item.price.toFixed(2)}</span><span class="quantity">${item.quantity}</span>`;
      ulElement.appendChild(liElement);
    });
  }
  
  displayMenuItems(coldDrinks, 'cold-drinks-list');
  displayMenuItems(hotDrinks, 'hot-drinks-list');
  displayMenuItems(sandwiches, 'sandwiches-list');
  displayMenuItems(kidsFood, 'kids-food-list');
  displayMenuItems(kidsDrinks, 'kids-drinks-list');
  