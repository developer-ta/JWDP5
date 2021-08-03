//Déclaré  des variables pour contrôler l'affichage de trois produits différents

const urlTeddies = 'http://localhost:3000/api/teddies';
const urlCameras = 'http://localhost:3000/api/cameras';
const urlFurnitures = 'http://localhost:3000/ap/furniture';
const DataPlace_products = document.querySelector('tbody');
let button_teddies;
let button_cameras;
let button_furnitures;
button_Touts_articles = document.querySelector('.Touts_articles').addEventListener('click', get_json(urlTeddies));
button_teddies = document.querySelector('.btn_teddies').addEventListener('click', get_json(urlTeddies));
button_cameras = document.querySelector('.btn_cameras').addEventListener('click', get_json(urlCameras));
button_furnitures = document.querySelector('.btn_teddies').addEventListener('click', get_json(urlFurnitures));

//Envoyer le requête pour récupérer les réponses de serveur

async function get_json(url) {
    url.stopPropagation();
    let jsonResponce = await fetch(url);
    if (jsonResponce.ok) {
        let data = await jsonResponce.json();
        console.log(data);
        afichage_data(data);
    } else {
        alert('Error');
    }


}


//Traiter et analyser les données obtenues par le serveur puis placer sur la pelle page HTM
function afichage_data(data_products) {
    console.log('34@@', data_products);

    let image_data = '';
    data_products.forEach(function(article_products) {

        console.log('39@@', article_products.imageUrl);
        console.log('40@@', article_products);

        image_data +=
            `<tr>
        <td class="image_product">
        <img src="${article_products.imageUrl}"></td>
        </tr>`;
    });
    DataPlace_products.innerHTML = image_data;

}


// let DataPlace2 = '<tr class="name"><td id="name"></td></tr><br>';
// DataPlace1.innerHTML = DataPlace2;
// console.log(urlTeddies);





















// alert(urlCameras);
// const ur = 'http://localhost:3000/api/teddies';



// fetch(urlCameras)
//     .then(async(response_1) => {
//         let x = await response_1.json();
//         console.log(x);
//         console.log(x[0].name);
//     })
// .then(data => data.forEach(ObjectTeddies => {





//     }

// ));











// getDataProducts(urlCameras);
// console.log(getDataProducts(urlCameras));






















// function affichache_peulush() {
//     fetch("http://localhost:3000/api/teddies")
//         .then((Response_1) => { console.log(Response_1);
//             Response_1.json();

//         })
//         .then((Response_2_objetArray) => {
//             console.log(Response_2_objetArray);
//         })
// }




// function get_json_teddies() {


//     let roque = fetch("http://localhost:3000/api/cameras")
//         .then(response_1 => {
//             console.log(response_1);

//             return response_1.json().then(value => {
//                 console.log(value);



//                 value.forEach(item => {
//                     let cameras = item;
//                     console.log('################cameras', cameras);
//                     return cameras;


// let source = cameras.imageUrl;

// let image = new Image();

// image.src = source;
// document.createElement('td');
// image.setAttribute('id', 'images');
// image.setAttribute('src', src);



// let containerImage = document.createElement('tr');
// containerImage.setAttribute('class', 'containerImage');

// console.log(document.querySelector('tbody').appendChild(containerImage));

// document.querySelector('.containerImage').appendChild(image);
// console.log(document.querySelector('.containerImage').appendChild(image));
//    for (let kayOf_item in cameras) {
//                         x = cameras[kayOf_item]

//                     }

//                 });

//             });

//         });




//     return roque;

// }
// console.log('@@@@@@', get_json_teddies().then(value => {

// }));