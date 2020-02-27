// var bodyDiv = document.getElementById('watches');
// bodyDiv.className = "card d-flex flex-row flex-wrap";
// bodyDiv.setAttribute("style","width: 18rem");

// var url = "http://localhost:3000/api/watches";

// fetch(url, {
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json",
//         "Authorization": "Bearer" + sessionStorage.getItem('token')
//     }
// })
// .then((response)=>response.json())
// .then((response)=> {
//     var watches = response;
//     console.log(watches);
// })
var divMare = document.getElementById('watches');



fetch("http://localhost:3000/api/watches",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp);
        var page1 = resp.slice(0, 8);
        // var page2 =resp.slice(8, 16);
        // var page3 = resp.slice(16, 24);

        page1.map(el => createEl(el))
    });

function createEl({ id, price, name, description, image }) {
    let watchCont = document.createElement('div');
    let title = document.createElement('h2');
    let img = document.createElement('img');
    let desc = document.createElement('div');
    let cash = document.createElement('div');
    cash.innerText = price;
    desc.innerText = id;
    img.setAttribute('style', `width: 200px; height: 200px;`);
    img.src = image;

    watchCont.appendChild(img);
    watchCont.setAttribute('id', id);
    watchCont.setAttribute('class', "elem");
    title.innerText = name;

    watchCont.appendChild(title);
    watchCont.appendChild(cash);
    watchCont.appendChild(id);

    divMare.appendChild(watchCont);
}

// console.log(divMare);

    // fetch('http://localhost:3000/api/watches')
    // .then(res => res.json())
    // .then(data => console.log(data))