localStorage.clear();
// const vehicleFiltered = document.getElementById('products-vehicle');
console.log($(`#products-vehicle`).val());
// const options = Array.from(vehicleFiltered.options);


$(document).ready(renderProducts($(`#products-vehicle`).val()));
$(`#products-container`).click(addCart);
$(`#btn-cart`).mouseover(renderCart);
$(`#products-vehicle`).change(selectedFilter);

