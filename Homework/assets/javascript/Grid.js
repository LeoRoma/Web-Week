function fetchData(){
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
        const html = data.map(user => {
            return `<p>Name: ${user.name} Origin: ${user.origin}</p>`
        }).join(" ");
        console.log(html);
        document.querySelector('.grid-item').insertAdjacentHTML('afterbegin', html) 
    }).catch(error => {
        console.log(error);
    })
}

fetchData();