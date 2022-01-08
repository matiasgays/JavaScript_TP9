const saveCart = (key, value) => {localStorage.setItem(key, value)};
const uploadCart = () => {
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        cart[i] = JSON.parse(localStorage.getItem(key));
    }
}

const renderProducts = (x) => {
    let productsFiltered;
    if(x == ''){
        productsFiltered = productsList;
    }
    else{
        productsFiltered = productsList.filter(option => {return option.vehicle == x});
    }
    $(`#products-container`).html("");
    productsFiltered.forEach(product => {
        $(`#products-container`).append( 
            `<div class="products-product">
                <img class="size-small" src="${product.img}">
                <h3>${product.name}</h3>
                <h4>${product.brand}</h4>
                <h4>$${product.price}</h4>
                <div id="btn-container">
                    <button id=${product.sku} class="btn">Comprar</button>
                </div>
            </div>`);
    })
}

const addCart = e => {
    if(e.target.classList.contains('btn')){
        let productChosen = productsList.find(product => product.sku == e.target.id);
        saveCart(`${e.target.id}`,JSON.stringify(productChosen));
        alert("Product successfully added to your shopping cart");
    }
}

const renderCart = () => {
    uploadCart();
    $(`#cart-container`).html("");
    cart.forEach(product => {
        $(`#cart-container`).append(`
            <div class="cart-product">
                <img class="size-thumbnail flex-item"" src="${product.img}">
                <h5 class="flex-item">${product.name}</h5>
                <h6 class="flex-item">${product.brand}</h6>
                <h6 class="flex-item">$${product.price}</h6>
            </div>`);
    });
}

const selectedFilter = (e) => {
    e.preventDefault();
    renderProducts($(`#products-vehicle`).val());
}
