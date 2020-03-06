function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
  }

var productId = getUrlVars()['id'];
console.log(productId);
fetch(`http://localhost:3000/api/watches/${productId}`,
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
    })
    .then(resp => resp.json())
    .then(response => {
        console.log(response);
        let productImage = document.getElementById('image');
        productImage.src = response.image;

        let name = document.getElementById('name');
        name.innerText = response.name + "   " + response.info.model;
        let material = document.getElementById('material');
        material.innerText = "MATERIAL:  " + response.case.material;
        let diametru = document.getElementById('diametru');
        diametru.innerText = "DIAMETRU:  " + response.case.diameter;
        let glass = document.getElementById('glass');
        glass.innerText = "STICLA:  " + response.case.glass;
        let strapMaterial = document.getElementById('strap-material');
        strapMaterial.innerText = "MATERIALUL BRATAREI:  " + response.strap.material;
        let strapColor = document.getElementById('strap-color');
        strapColor.innerText = "CULOAREA BRATAREI:  " + response.strap.braceletColor;
    })
    .catch(err => console.log(err));