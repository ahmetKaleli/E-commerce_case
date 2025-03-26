const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"))
const detail = document.getElementById("productDetail")

if (selectedProduct) {
    detail.innerHTML = `
        <h2>${selectedProduct.productName}</h2>
        <img src="${selectedProduct.productData.productMainImage}" alt="${selectedProduct.productName}" />
        <p>${selectedProduct.productData.productInfo}</p>
        <p>Fiyat: ${selectedProduct.salePrice} TL</p>

    `
} else {
    detail.innerHTML = "<p>ürün bulunamadı</p>"
}