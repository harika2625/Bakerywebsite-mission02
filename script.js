let cartDisplay = 0;
function addItem(event) {
  quantityDisplayEl.textContent = event.target.value;
}
const displayquantity = document.querySelector(".quantityItems");

function addToCart() {
  cartDisplay = cartDisplay + 1;
  displayquantity.textContent = cartDisplay;
}
const cartIcon = document.querySelector(".cart");
const shoppingCart = document.querySelector(".cartTab");
const closingButton = document.querySelector(".close");
const listCart = document.querySelector(".listCart");

cartIcon.addEventListener("click", function () {
  shoppingCart.classList.add("open");
});

closingButton.addEventListener("click", function () {
  shoppingCart.classList.remove("open");
});

const displayItems = document.querySelectorAll(".cart-button");
displayItems.forEach((button) => {
  button.addEventListener("click", addToCart);
});

// Add event listeners for quantity controls
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const number = document.querySelector(".number");

let itemNumber = 1;

// Need to comment this if using for loop way of displaying products in show cart tab
// plus button eventlisteners
plusButton.addEventListener("click", () => {
  itemNumber++;
  itemNumber = itemNumber < 10 ? +itemNumber : itemNumber;
  number.innerHTML = itemNumber;
  console.log(itemNumber);
});
// plus button eventlisteners
minusButton.addEventListener("click", () => {
  itemNumber--;
  itemNumber = itemNumber > 10 ? -itemNumber : itemNumber;
  number.innerHTML = itemNumber;
  console.log(itemNumber);
});
// untill here

// Products Array(not on my website)

const displayItemsInShoppingCart = [];

const cartItems = [
  {
    id: 1,
    item: "Donuts",
    price: 4,
    quantity: 5,
    Image: "images/doughnuts-donuts.webp",
  },
  {
    id: 2,
    item: "Muffins",
    price: 5,
    quantity: 1,
    Image: "images/muffin.webp",
  },
  {
    id: 3,
    item: "Bread",
    price: 6,
    quantity: 5,
    Image: "images/breads.jpg",
  },
  {
    id: 4,
    item: "Milkshakes",
    price: 10,
    quantity: 5,
    Image: "images/milkshake.webp",
  },
  {
    id: 5,
    item: "Crossiants",
    price: 8,
    quantity: 5,
    Image: "images/Croissants-01.jpg",
  },
  {
    id: 6,
    item: "Macarons",
    price: 7,
    quantity: 5,
    Image: "images/macarons.avif",
  },
  {
    id: 7,
    item: "Sandwich",
    price: 7,
    quantity: 5,
    Image: "images/Egg-Salad-Sandwich.jpg",
  },
  {
    id: 8,
    item: "Cookies",
    price: 7,
    quantity: 1,
    Image: "images/miso_cookies.jpg",
  },
];
// second way of adding product names to shopping cart
// for (let i = 0; i < cartItems.length; i++) {
//   cartItems[i].item;
//   listCart.innerHTML = cartItems[i].item + "\n" + listCart.innerHTML;
// }
