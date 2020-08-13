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
        const newsList = data.results;
        // console.log(newsList);
        const html = newsList.map((news, index) => {
            return `<div class="news id="${index}" data-title="${news.title}" >
                          <h3>${news.title}</h3>
                          <img src="${news.multimedia[3].url}"/>
                    </div>`
        }).join(" ");
        // console.log(html);
        document.querySelector('.newsList').innerHTML = html;
    }).catch(error => {
        console.log(error);
    })
});

