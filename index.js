import fetch from "node-fetch";

function maxAndminprz(productList){
    let min = productList[0].price;
    let max = 0;

    productList.map((product)=>{
        if(product.price > max) max = product.price;
        else if(product.price < min) min = product.price;
    });

    let minProduct = productList.filter((e) => e.price === min);
    let maxProduct = productList.filter((e) => e.price === max);

    minProduct.map((product) => console.log("min price\nName: "+product.product+" Price:"+product.price));
    maxProduct.map((product) => console.log("max price\nName: "+product.product+" Price:"+product.price));

}

function productByBrandAndPrice(productList, brand, price = 0){
    let filterBrandProductList = productList.filter((e) => e.brand === brand );
    
    if(price > 0){
        let filterPriceProductList = filterBrandProductList.filter(
            (e) => (e.price > 0 && e.price <= price)
        );
        
        filterPriceProductList.map((product) => console.log("Name: "+product.product+" \nbrand: "+product.brand+"\nprice: "+product.price));
    } else 
        filterBrandProductList.map((product) => console.log("Name: "+product.product+" \nbrand: "+product.brand+"\nprice: "+product.price));
}

function searchWithSubStr(productList,searchStr){
    let filterProductList = productList.filter((e) => (e.productName).includes(searchStr));
    filterProductList.map((product) => console.log(product.productName))
}


function makeApiCall(){
    fetch("https://demo7303877.mockable.io/",{method:"GET"})
    .then((res)=>{
        let promise = res.json();
        promise.then((result)=>{
            let productList = result.products;
            console.log("\nA");
            maxAndminprz(productList);
            console.log("\nB");
            productByBrandAndPrice(productList,"Daniel Klein");
            console.log("\nC");
            searchWithSubStr(productList,"Watch");
        })

    })
}

makeApiCall();