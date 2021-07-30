const camerasata = document.querySelector('tbody').innerHTML;
const urlTeddies = 'http://localhost:3000/api/teddies';
// alert(urlTeddies);
const urlCameras = "http://localhost:3000/api/cameras";





let DataPlace_teddies;
DataPlace_teddies = document.querySelector('tbody');
// let DataPlace2 = '<tr class="name"><td id="name"></td></tr><br>';
// DataPlace1.innerHTML = DataPlace2;
// console.log(urlTeddies);
let button_teddies = document.querySelector('.btn_teddies').addEventListener('click', get_json_teddies);



async function get_json_teddies() {

    let jsonResponce = await fetch(urlTeddies);
    let data = await jsonResponce.json();
    //console.log(data);


    afichage_data_teddies(data);


}
get_json_teddies();


function afichage_data_teddies(data_teddies) {
    console.log(data_teddies);

    let image_data_teddies = '';
    data_teddies.forEach(function(article_teddies) {

        console.log(article_teddies.imageUrl);
        image_data_teddies += `<tr><td><img src="${article_teddies.imageUrl}"></td></tr>}`;
    });
    DataPlace_teddies.innerHTML = image_data_teddies;

}













// alert(urlCameras);
// const urlTeddies = 'http://localhost:3000/api/teddies';



// fetch(urlCameras)
//     .then(async(response_1) => {
//         let x = await response_1.json();
//         console.log(x);
//         console.log(x[0].name);
//     })
// .then(data => data.forEach(ObjectTeddies => {





//     }

// ));




function getDataProducts(url) {}






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