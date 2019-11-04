const books_price = 100.00
const meal_plan_price = 15.00
const instrument_price = 200.00
const plants_price = 65.00
const decoration_price = 300.00
const web_dev_price = 500.00
const mexican_food_price = 45.00
const sports_acc_price = 499.99

const openCartButton = document.querySelectorAll('[data-cartcontent-target]')
const closeCartButton = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openCartButton.forEach(img => {
  img.addEventListener('click', () => {
    const cartcontent = document.querySelector(img.dataset.cartcontentTarget)
    openCart(cartcontent)
  })
})

closeCartButton.forEach(button => {
  button.addEventListener('click', () => {
    const cartcontent = button.closest('.cartcontent')
    closeCart(cartcontent)
  })
})

function openCart(cartcontent) {
  cartcontent.classList.add('active');
  overlay.classList.add('active');
}

function closeCart(cartcontent) {
  cartcontent.classList.add('active');
  overlay.classList.add('active');
}

var shopping_cart = [ ];

function addToCart(el) {
  var btnClass = el.className;
  shopping_cart.push(btnClass);
  console.log(shopping_cart);
  }
