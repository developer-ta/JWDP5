let container = document.createElement('div');
container.className = "container_item";
document.querySelector('.affichang_products').appendChild(container);
let teddies__data = [];



//A) récupérer data
async function get_json() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();


        affichage_teddies(data);
    } else {
        alert('Error');
    }


}



get_json();

//B) affichage data
function affichage_teddies(data) {
    let teddies = {};
    let images = '';
    let p = '';
    let affisher = '';
    let item_container = '';
    for (let item of data) {

        let description = item.description;
        let image = item.imageUrl;

        affisher = '<div class="selection"> <button class = "btn addPanier"> add-panier </button> <button class = "btn add-favorite"> favorite </button></div>';



        images = `<a href="${image}" target="_black" 
        class="image-size"><img src="${image}"></a>`;

        p = `<div class="product_description"><strong>description:</strong>${description}<br><hr><strong>colors:</strong> ${item.colors}<br> <hr><strong>price:</strong>${item.price}€<hr></div>`
        item_container += `<div class="image_product">${images}${p}${affisher}</div>`;

    };


    document.querySelector('.container_item').innerHTML = item_container;
    document.querySelectorAll(".addPanier");
    console.log('querySelectorAll(".addPanier"): ', querySelectorAll(".addPanier"));

}





//C) add-Panier
//C-0)get button click:-1 f() data; -2 f() recevoir la donné;-3 f()



// x.forEach(function (item, i) {
//     item[i].addEventListener('click', function () {
//         console.log("@@@@@@@@@");

//     });
// });

//C-1)save locageStrored


//C-2)get locageStrored
//C-3)loaded locageStrored
//C-4)counter panier locageStrored