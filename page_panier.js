let container = document.createElement('div');
container.className = "container_item";
document.querySelector('.affichang_products').appendChild(container);
let add_panier_data = {};
console.log('add_panier_data = {}: ', add_panier_data = {});





//A) récupérer data
async function get_json() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();
        affichage_teddies(data);
        add_panier(data);
        add_panier_data.product_data = data;



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
    data.forEach(function (item) {
        // console.log('item: ', item);
        let description = item.description;
        let image = item.imageUrl;

        affisher = '<div class="selection"><button class="btn add_panier" type="submit">add-panier</button><button class="btn" type="submit">favorite</button></div>'


        images = `<a href="${image}" target="_black" class="image-size"><img src="${image}"></a>`

        p = `<div class="product_description"><strong>description:</strong>${description}<br><hr><strong>colors:</strong> ${item.colors}<br> <hr><strong>price:</strong>${item.price}€<hr></div>`
        item_container += `<div class="image_product">${images}${p}${affisher}</div>`;

    });
    // console.log('item_container: ', item_container);

    document.querySelector('.container_item').innerHTML = item_container;
    add_panier_data.button = document.querySelectorAll('button.btn.add_panier');



    // document.querySelector('.image_product').innerHTML = images;
    // document.querySelector('.description').innerHTML = p;
    // document.querySelector('.btn_select').innerHTML = affisher;

}


//C) add-Panier
//C-0)get button click:-1 f() data; -2 f() recevoir la donné;-3 f()
function add_panier() {

    //add click listener -> button click

    for (let j = 0; j < add_panier_data.button.length; j++) {

        add_panier_data.button[j].addEventListener("click", (e) => {
            e.stopPropagation();
            console.log(add_panier_data.product_data[j]);


            // Event.stopPropagation();




        });
    }
}






// x.forEach(function (item, i) {
//     item[i].addEventListener('click', function () {
//         console.log("@@@@@@@@@");

//     });
// });

//C-1)save locageStrored


//C-2)get locageStrored
//C-3)loaded locageStrored
//C-4)counter panier locageStrored