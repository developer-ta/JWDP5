let allUrl = ['http://localhost:3000/api/teddies',
    'http: //localhost:3000/api/cameras',
    'http://localhost:3000/api/furniture'
]
let allTeddies__data = [];
console.log('let allTeddies__data[]: ', allTeddies__data);
let allCameras__data = [];
console.log('let allCameras__data[]: ', allCameras__data);
let allFurniture__data = [];
console.log('let allFurniture__data[]: ', allFurniture__data);
let url = [];
let DataPlace_products = document.querySelector('tbody');



//1))))))))))))
async function get_json_teddies() {

    let jsonResponce = await fetch('http://localhost:3000/api/teddies');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let teddies__data = data;

        // afichage_data(teddies__data);

        allTeddies__data.push(teddies__data);



    } else {
        alert('Error');
    };
}
get_json_teddies();
//))))))))))))))))))))))))))))))))))))

async function get_json_cameras() {

    let jsonResponce = await fetch('http://localhost:3000/api/cameras');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let cameras__data = data;

        cameras(cameras__data);

        allCameras__data.push(cameras__data);



    } else {
        alert('Error');
    };
}
get_json_cameras();

//)))))))))))))))))))))))

async function get_json_furniture() {

    let jsonResponce = await fetch('http://localhost:3000/api/furniture');

    if (jsonResponce.ok) {
        let data = await jsonResponce.json();

        let furniture__data = data;
        console.log(furniture__data);
        afichage_data_furniture(furniture__data);
        allFurniture__data.push(furniture__data);

    } else {
        alert('Error');
    };
}
get_json_furniture();

//Afficher les produits dans la page d'accueil et lister ))))))

function afichage_data_furniture(furniture) {
    console.log('furniture: ', furniture);

    let image_data = '';
    // let color = '';


    furniture.forEach(function (article_products) {





        image_data +=
            `<tr>
    <td class="image_product">
        <img src="${article_products.imageUrl}">
        
        <div class="data"><h3>${article_products.name}</h3>
        <p> prix: ${article_products.price} €</p></div>

    </td>
      <td class="image_product_camera"></td>
      <td class="image_product">
        <img src="${article_products.imageUrl}">
        
        <div class="data"><h3>${article_products.name}</h3>
        <p> prix: ${article_products.price} €</p></div>

    </td>
</tr>`;

    });

    DataPlace_products.innerHTML = image_data;






}
//Afficher les produits dans la page d'accueil et lister ))))))

function cameras(allCameras__data) {
    let image = '';
    allCameras__data.forEach(camera => {

        // image += `<img src="${camera.imageUrl}"><div class="data"><h3>${camera.name}</h3><p>prix: ${camera.price} €</p></div>`;
        image += `<img src="${camera.imageUrl}">`;

    });
    DataPlace_products.innerHTML = image;
    console.log('image: ', image);


}