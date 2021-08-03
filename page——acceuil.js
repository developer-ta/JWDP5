let allUrl = ['http://localhost:3000/api/teddies',
    'http: //localhost:3000/api/cameras',
    'http://localhost:3000/api/furniture'
];
const allTeddies__data = [];
console.log('const allTeddies__data[]: ', allTeddies__data);
const allCameras__data = [];
console.log('const allCameras__data[]: ', allCameras__data);
const allFurniture__data = [];
console.log('const allFurniture__data[]: ', allFurniture__data);
let url = [];
const DataPlace_products = document.querySelector('tbody');




//1))))))))))))
async function get_json_teddies() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let teddies__data = data;

        teddies__data.forEach(function (teddies__data) {

            allTeddies__data.push(teddies__data);

        });

    } else {
        alert('Error');
    };
}
get_json_teddies();

async function get_json_cameras() {

    let jsonResponce = await fetch('http://localhost:3000/api/cameras');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let cameras__data = data;

        cameras__data.forEach(function (cameras__data) {

            allCameras__data.push(cameras__data);

        });

    } else {
        alert('Error');
    };
}
get_json_cameras();

async function get_json_furniture() {

    let jsonResponce = await fetch('http://localhost:3000/api/furniture');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let furniture__data = data;

        furniture__data.forEach(function (furniture__data) {

            allFurniture__data.push(furniture__data);

        });

    } else {
        alert('Error');
    };
}
get_json_furniture();