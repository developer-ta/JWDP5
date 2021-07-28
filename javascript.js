// function affichache_peulush() {
//     fetch("http://localhost:3000/api/teddies")
//         .then((Response_1) => { console.log(Response_1);
//             Response_1.json();

//         })
//         .then((Response_2_objetArray) => {
//             console.log(Response_2_objetArray);
//         })
// }
function get_json_teddies() {
    fetch("http://localhost:3000/api/cameras").then((response_1) => {
        console.log(response_1);

        response_1.json().then((value) => {
            console.log(value);

            console.log(value[0]);

        });


        document.querySelector(".product-list").innerHTML = text;
    });

}

get_json_teddies();