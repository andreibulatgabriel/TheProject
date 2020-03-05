
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
        // console.log(resp);
        var page1 = resp.slice(0, 8);
        // var page2 =resp.slice(8, 16);
        // var page3 = resp.slice(16, 24);

        page1.map(el => createEl(el))
    });

    var balance = 0;
function createEl({ id, price, name, description, image }) {
    let watchCont = document.createElement('li');
    let title = document.createElement('h2');
    title.setAttribute('class', "name");
    


    let img = document.createElement('img');
    let desc = document.createElement('div');
    let cash = document.createElement('div');
    let detailsButton = document.createElement('button');
    detailsButton.className = 'details-button';
    detailsButton.setAttribute('id', id);
    detailsButton.innerText = "Details";
    detailsButton.addEventListener('click', e => {
        if (e.target.id) {
          window.location.assign(`../paginaProdus/paginaProdus.html?id=${e.target.id}`);
        }
        return
      })
    
    let addButton = document.createElement('button');
    addButton.className = 'add-button';
    addButton.innerText = "Add to Cart";
    //functia care baga produse in cos
    addButton.addEventListener('click', () => {
        const tableBody = document.getElementById('tableBody');
        const trItem = document.createElement('tr');
        const tdNume = document.createElement('td');
        const tdPret = document.createElement('td');
        const balanceText = document.getElementById('currentBalance');
        
        balance = balance + price;
        balanceText.innerText = `Total: $${balance}.00`;

        tdNume.innerText = name;
        tdPret.innerText = price;

        trItem.appendChild(tdNume);
        trItem.appendChild(tdPret);

        tableBody.appendChild(trItem);
    });
    cash.innerText = `$${price}.00`;
    desc.innerText = id;
    img.setAttribute('style', `width: 12vw; height: 20vh;`);
    img.src = image;

    watchCont.appendChild(img);
    watchCont.setAttribute('id', id);
    watchCont.setAttribute('class', "elem");
    title.innerText = name;

    watchCont.appendChild(title);
    watchCont.appendChild(cash);
    // watchCont.appendChild(desc);
    watchCont.appendChild(detailsButton);
    watchCont.appendChild(addButton);
    divMare.appendChild(watchCont);
    
}


let filterInput = document.getElementById('site-search');

filterInput.addEventListener('keyup', filterItems);

function filterItems(){
    let filterValue = document.getElementById('site-search').value.toLowerCase();
    let watchList = document.getElementById('watches');
    let list = document.getElementsByClassName('elem');
    let nume = document.getElementsByClassName('name');

    for(let i = 0; i < list.length; i ++){
        // console.log(nume[i].innerText.toLowerCase());
        if(nume[i].innerText.toLowerCase().indexOf(filterValue) > -1){
            list[i].style.display = '';
        } else{
            list[i].style.display = 'none';
        }
        
    }
}

