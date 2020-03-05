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
        console.log(response.price);
    })
    .catch(err => console.log(err));