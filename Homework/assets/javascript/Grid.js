$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        console.log(data.results[0])
        const art = data.results
        const html = `
                        <a href='${art[0].multimedia[0].url}'><img src='${art[0].multimedia[3].url}' width='450' height='250'></a>
                        <a href='${art[0].url}'><h4>${art[0].title}</h4></a>
                        <p>${art[0].abstract}</p>
                     `
        document.querySelector('.grid-item1').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[1].multimedia[0].url}'><img src='${art[1].multimedia[3].url}' width='450' height='250'></a>
                        <a href='${art[1].url}'><h4>${art[1].title}</h4></a>
                        <p>${art[1].abstract}</p>
                     `
        document.querySelector('.grid-item2').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[2].multimedia[0].url}'><img src='${art[2].multimedia[3].url}' width='450' height='250'></a>
                        <a href='${art[2].url}'><h4>${art[2].title}</h4></a>
                        <p>${art[2].abstract}</p>
                     `
        document.querySelector('.grid-item3').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[3].url}'><h4>${art[3].title}</h4></a>
                        <p>${art[3].abstract}</p>
                        <a href='${art[3].multimedia[0].url}'><img src='${art[3].multimedia[3].url}' width='300' height='120'></a>
                     `
        document.querySelector('.grid-item4').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[4].url}'><h4>${art[4].title}</h4></a>
                        <p>${art[4].abstract}</p>
                        <a href='${art[4].multimedia[0].url}'><img src='${art[4].multimedia[3].url}' width='300' height='120'></a>
                     `
        document.querySelector('.grid-item5').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[5].url}'><h4>${art[5].title}</h4></a>
                        <p>${art[5].abstract}</p>
                        <a href='${art[5].multimedia[0].url}'><img src='${art[5].multimedia[3].url}' width='300' height='120'></a>
                     `
        document.querySelector('.grid-item5').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[6].url}'><h4>${art[6].title}</h4></a>
                        <p>${art[6].abstract}</p>
                        <a href='${art[6].multimedia[0].url}'><img src='${art[6].multimedia[3].url}' width='300' height='120'></a>
                     `
        document.querySelector('.grid-item6').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});

$(function fetchData(){
    fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd')
    .then(response => { 
        console.log(response)
        if(!response.ok){
            thorw ("Error");
        }
        return response.json()
    })
    .then(data => {
        const art = data.results
        const html = `
                        <a href='${art[7].url}'><h4>${art[7].title}</h4></a>
                        <p>${art[7].abstract}</p>
                        <a href='${art[7].multimedia[0].url}'><img src='${art[7].multimedia[3].url}' width='300' height='120'></a>
                     `
        document.querySelector('.grid-item7').innerHTML = html;           
    }).catch(error => {
        console.log(error);
    })
});