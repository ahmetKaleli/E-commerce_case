const API_URL = "https://api.hyperteknoloji.com.tr/products/list/"
const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJMb2dpblR5cGUiOiIxIiwiQ3VzdG9tZXJJRCI6IjU1NzI0IiwiRmlyc3ROYW1lIjoiRGVtbyIsIkxhc3ROYW1lIjoiSHlwZXIiLCJFbWFpbCI6ImRlbW9AaHlwZXIuY29tIiwiQ3VzdG9tZXJUeXBlSUQiOiIzMiIsIklzUmVzZWxsZXIiOiIwIiwiSXNBUEkiOiIxIiwiUmVmZXJhbmNlSUQiOiIiLCJSZWdpc3RlckRhdGUiOiIzLzI1LzIwMjUgMTowMDo0OCBQTSIsImV4cCI6MjA1Mzk1NDcyMywiaXNzIjoiaHR0cHM6Ly9oeXBlcnRla25vbG9qaS5jb20iLCJhdWQiOiJodHRwczovL2h5cGVydGVrbm9sb2ppLmNvbSJ9.2l2uaWKIy5JGtIoChj4hWoPSEdgIWx40aS-5vOcjPFM"

//Get Product
async function getProducts() {

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${API_TOKEN}`,
                "Content-type": "application/json charset-UTF8"
            }
        })


        const data = await res.json()
        const pr = data.data



        const products = pr.slice(0, 8)
        console.log(products);

        const productsList = document.getElementById("container")
        productsList.innerHTML = ""

        products.forEach((product) => {
            const createElement = document.createElement("div")
            createElement.classList.add("product")
            createElement.innerHTML = `
                <img src=${product.productData.productMainImage}/>
                <h3>${product.productName}</h3>
                <p><strong>Price:</strong> ${product.salePrice} TL</p>
               
              <button class="detailBtn" data-id="${product.productID}">Detail</button>
            `
            productsList.appendChild(createElement)
        })
        document.querySelectorAll(".detailBtn").forEach((btn) => {
            btn.addEventListener("click", (e) => {
                const prId = e.target.dataset.id


                const selectedProduct = products.find(p => String(p.productID) === String(prId))
     

                localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct))
                window.location.href = "detail.html"

            })
        })



    } catch (error) {
        console.log(error);

    }

}

getProducts()


