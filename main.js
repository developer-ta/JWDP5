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

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();


        afichage_teddies(data);
    } else {
        alert('Error');
    }


}
get_json();

function afichage_teddies(data) {
    let teddies = {};
    let images = '';
    let p = '';
    let affisher = '';
    let item_container = '';


    data.forEach(function (item) {
        console.log('item: ', item);
        let description = item.description;
        let image = item.imageUrl;

        affisher = '<button class="btn" type="submit">add-panier</button><button class="btn" type="submit">favorite</button>'


        images = `<a href="${image}" target="_black"><img src="${image}"></a>`

        p = `<div><strong>description:</strong>${description}<br>colors: <br> price:</div>`
        item_container += `<div>${images}${p}${affisher}</div>`;





    });
    console.log('item_container: ', item_container);
    document.querySelector('.container_item').innerHTML = item_container;



    // document.querySelector('.image_product').innerHTML = images;
    // document.querySelector('.description').innerHTML = p;
    // document.querySelector('.btn_select').innerHTML = affisher;




}