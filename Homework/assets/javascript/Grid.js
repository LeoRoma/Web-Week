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
            return `
                    <div class="col">
                        <h1 style="color:#74BBFC; font-size:35px font-family:fantasy">Name: ${cat.breeds[0].name}<h2>
                        <h3 style="color:#74BBFC; font-size:25px font-family:fantasy">Origin: ${cat.breeds[0].origin}<h3>
                        <h4 style="color:#74BBFC; font-size:15px font-family:fantasy"><em>Description: ${cat.breeds[0].description}</em><h4>
                        </div>
                        <div class="col">
                        <img src="${cat.url}" width="500" height="400" style="border-radius=15%;"/>
                    </div>
                    `
        }).join(" ");
        console.log(html);
        document.querySelector('.row').innerHTML = html; 
    }).catch(error => {
        console.log(error);
    })
};
