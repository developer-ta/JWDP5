let container = document.createElement('div');
container.className = "container_item";
document.querySelector('.affichang_products').appendChild(container);
let add_panier_data = {};
console.log('add_panier_data = {}: ', add_panier_data);








//A) récupérer data
async function get_json() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();
        affichage_teddies(data);
        add_panier(data);
        keep_products_numbers();
        //envoyer nouvell Propriété ->objet add_panier_data
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

        affisher = '<form><div class="selection"><button class="btn add_panier" type="button">add-panier</button><input id="input-number" type="number" placeholder="0"></input></div></form>';


        images = `<a href="${image}" target="_black" class="image-size"><img src="${image}"></a>`;

        p = `<div class="product_description"><strong>description:</strong>${description}<br><hr><strong>colors:</strong> ${item.colors}<br> <hr><strong>price:</strong>${item.price*0.01} €<hr></div>`
        item_container += `<div class="image_product">${images}${p}${affisher}</div>`;

    });
    // console.log('item_container: ', item_container);

    document.querySelector('.container_item').innerHTML = item_container;
    add_panier_data.button = document.querySelectorAll('button.btn.add_panier');
    add_panier_data.quantity = document.querySelectorAll('#input-number');






    // document.querySelector('.image_product').innerHTML = images;
    // document.querySelector('.description').innerHTML = p;
    // document.querySelector('.btn_select').innerHTML = affisher;

}





//C) add-Panier
//C-0)get button click:-1 f() data; -2 f() recevoir la donné;-3 f()
function add_panier() {
    let quantity = '';
    //add click listener -> button click
    for (let j = 0; j < add_panier_data.button.length; j++) {

        add_panier_data.quantity[j].addEventListener('change', (e) => {
            e.stopPropagation();

            //console.log('add_panier_data.quantity: ', add_panier_data.quantity[j]);

            quantity = JSON.stringify(e.target.value);

            console.log('quantity: ', quantity);


            //  const id_Product = add_panier_data.product_data[j]._id;

        });

        add_panier_data.button[j].addEventListener("click", (e) => {
            e.stopPropagation();
            localStorage.setItem(add_panier_data.product_data[j]._id, quantity);
            //set->localStorage pour chaque button
            const id_Product = add_panier_data.product_data[j]._id;
            let key_Of_Product = add_panier_data.product_data[j].name;
            const value_objet = JSON.stringify(add_panier_data.product_data[j]);
            console.log(add_panier_data.product_data[j]);
            //set localStorage -> produits choisi
            localStorage.setItem(key_Of_Product, value_objet);
            // set counter ->item panier
            item_counter();
            add_panier_data.get_quantity = id_Product;

            console.log('quantity: ', quantity);
        });


    }
}

// function get_quantity() {
//     for (let j = 0; j < add_panier_data.button.length; j++) {
//         add_panier_data.quantity[j].addEventListener('change', (e) => {
//             console.log('add_panier_data.quantity: ', add_panier_data.quantity[j]);

//             let quantity = JSON.stringify(e.target.value);

//             console.log('quantity: ', quantity);

//             const id_Product = add_panier_data.product_data[j]._id;


//             localStorage.setItem(id_Product, quantity);




//         });
//     }


// }



function keep_products_numbers() {
    document.querySelector('.item_counter').textContent = parseInt(localStorage.getItem('selection_number'));

}


let numbers_item = 0;

function item_counter() {

    // nombre d'articles sélecter dans le panier
    let selection_number = document.querySelector('.item_counter');

    ++numbers_item;
    localStorage.setItem('selection_number', numbers_item);
    selection_number.textContent = parseInt(localStorage.getItem('selection_number'));

}


//    localStorage.setItem(key_Of_Product, value_objet);;




//     //add click listener -> quantity charge
//     // console.log('add_panier_data.quantity: ', add_panier_data.quantity);



//     for (let i = 0; i < 5; i++) {
//         let x = document.querySelectorAll('#input-number');



//         x[i].addEventListener('charge', (e) => {
//             console.log('add_panier_data.quantity: ', x);
//             // event.stopPropagation();
//             //set->localStorage pour chaque quantity


//             let input = jSON.stringify(e.target.value);
//             console.log(('###########'), input);
//             //set localStorage -> quantity choisi
//             localStorage.setItem(id_Product, input);
//             // set counter ->item panier

//         });
//     }


// }











// x.forEach(function (item, i) {
//     item[i].addEventListener('click', function () {
//         console.log("@@@@@@@@@");

//     });
// });

//C-1)save locageStrored


//C-2)get locageStrored
//C-3)loaded locageStrored
//C-4)counter panier locageStrored