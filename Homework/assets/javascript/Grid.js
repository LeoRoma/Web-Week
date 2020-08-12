$(function fetchData(){
    fetch('http://api.thecatapi.com/v1/breeds?f16ad962-557b-4deb-b7ab-626cc52a45f9')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const html = data.map(breed => {
            return `<option value="${breed.id}">${breed.name}</option>`
        }).join(" ");
        console.log(html);
        document.querySelector('.dropdown').insertAdjacentHTML('afterbegin', html) 
    }).catch(error => {
        console.log(error);
    })
});

function getSelectedBreed(){
    var selectedBreed = document.getElementById("breedsList").value;
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${selectedBreed}`)
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
        const html = data.map(cat => {
            return `<h2>Name: ${cat.breeds[0].name}<h2> 
                    <h3>Origin: ${cat.breeds[0].origin}<h3>
                    <p>Description: ${cat.breeds[0].description}</p>
                    <img src="${cat.url}" width="200" height="200"/>`
        }).join(" ");
        console.log(html);
        document.querySelector('.grid-item').innerHTML = html; 
    }).catch(error => {
        console.log(error);
    })
};

function getSelectValue(){
    var selectedValue = document.getElementById("breedsList").value;
    console.log(selectedValue);
};