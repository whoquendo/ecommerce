const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHambIcon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobil-menu');
const carritoCompras = document.querySelector('.navbar-shoppingcart');
const carroCompras = document.querySelector('.assideShoppingCart');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobilMenu);
carritoCompras.addEventListener('click', toggleCarroCompras);

function toggleDesktopMenu() {
    carroCompras.classList.add('innactive');
    desktopMenu.classList.toggle('innactive');
}; 


function toggleMobilMenu() {
    carroCompras.classList.add('innactive');
    mobilMenu.classList.toggle('innactive');
};

function toggleCarroCompras() {
    desktopMenu.classList.add('innactive');
    mobilMenu.classList.add('innactive');
    carroCompras.classList.toggle('innactive');
};

//Código para crear lista de productos y luego adicionarlos al html 
const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});

productList.push({
    name: 'Pantalla',
    price: 80,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});

productList.push({
    name: 'Computador',
    price: 1200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
});

//For para adicionar productos al html con manipulacion del DOM
for (product of productList) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    productInfo.appendChild(productInfoDiv);

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');

    const productInfoFigureImg = document.createElement('img');
    productInfoFigureImg.setAttribute('src', "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productInfoFigureImg);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);

    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);









} 