let container = document.createElement('div');
container.className = "container_item";
document.querySelector('.affichang_products').appendChild(container);
let teddies__data = [];





// const images_products = document.createElement('div');
// images_products.className = "image_product";
// document.querySelector('.container_item').appendChild(images_products);
// const description_products = document.createElement('div');
// description_products.className = "description";
// document.querySelector('.container_item').appendChild(description_products);
// const btn_select = document.createElement('div');
// btn_select.className = "btn_select";
// document.querySelector('.container_item').appendChild(btn_select);




async function get_json() {
    // console.log('dgfgfgff');
    // const category = new URLSearchParams(window.location.search).get("category");
    // console.log('category: ', category);
    // let jsonResponce = await fetch('http://localhost:3000/api/' + category);
    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();


        affichage_teddies(data);
    } else {
        alert('Error');
    }


}

get_json();

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
    console.log(button = document.querySelectorAll('button.btn.add_panier'));



    // document.querySelector('.image_product').innerHTML = images;
    // document.querySelector('.description').innerHTML = p;
    // document.querySelector('.btn_select').innerHTML = affisher;

}


// document.querySelector('.btn_teddies').addEventListener('click', function () {
//     // get_json();
//     // teddies_button();
//     console.log('eeeee@@@@@');
//     // new URLSearchParams(window.location.search).set("category", "teddies");


// // });

// function teddies_click() {
//     console.log('@@@@@@@@@@@');
//     new URLSearchParams(window.location.search).set("category", "teddies");
//     localStorage.setItem
// }

// function teddies_button() {



//     document.querySelector('.btn_cameras').addEventListener('click', function (e) {
//         e.preventDefault();
//     });
//     document.querySelector('.btn_furniture').addEventListener('click', function (e) {
//         e.preventDefault();
//     });



// }