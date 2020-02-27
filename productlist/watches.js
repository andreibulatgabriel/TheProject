var divMare=document.getElementById('parfumes');
divMare.className="card d-flex flex-row flex-wrap ";
divMare.setAttribute("style", "width: 18rem");

fetch("http://localhost:3000/api/parfumes",
    {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + sessionStorage.getItem('token')
        }
    })
    .then((response) => response.json())
    .then((response) => {
    var parfumuri=response;
    console.log(parfumuri);
        parfumuri.forEach(function(parfum){
            var div=document.createElement('div');
            div.className="card-body";
            
            var img=document.createElement('img');
            img.className="card-img";
            
            img.src=`/poze/${parfum.image}.jpg`;

            var p=document.createElement('p');
            p.className="card-text";
           
            p.innerHTML=`${parfum.name} <br>${parfum.price}`;
            
           
            div.appendChild(img);
            div.appendChild(p);
            divMare.appendChild(div);


        });
        console.log(divMare);
        
    });
