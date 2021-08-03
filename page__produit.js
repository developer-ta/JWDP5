// const nurl.suffix = ["teddies", "cameras", "furniture"];
const urlTeddies = 'http://localhost:3000/api/teddies';
const urlCameras = "http://localhost:3000/api/cameras";
const urlFurnitures = "http://localhost:3000/api/furniture";
const DataPlace_products = document.querySelector('tbody');
// document.querySelector('.btn_teddies').addEventListener('click', event => {
//     event.stopPropagation();
//     get_json(urlTeddies);
// });
// document.querySelector('.btn_cameras').addEventListener('click', event => {
//     event.stopPropagation();
//     get_json(urlCameras);
// });
document.querySelector('.btn_furniture').addEventListener('click', event => {
    event.stopPropagation();
    get_json();
});
// button_cameras = document.querySelector('.btn_cameras').addEventListener('click', get_json());
// button_furnitures = document.querySelector('.btn_teddies').addEventListener('click', get_json());


function get_json() {

    fetch(urlFurnitures)
        .then(jsonResponce => {
            if (jsonResponce.status = 200) {
                jsonResponce.json().then(data => {
                    console.log(data);
                    // afichage_data(data);
                });
            } else {
                alert("error!");
            }
        });
}
get_json();