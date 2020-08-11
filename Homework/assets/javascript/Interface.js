$(function () {

    var $results = $('#results');

    $.ajax({
        type: 'GET',
        url: 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=s3sidQNE043xhMtYMOTXG0E044n5RsFd',
      
        success: function (results) {
        var items = results.results;
        
        // $.each(items, function (i, item) {
        //     $results.append('<li> Section: ' + item.title + ', Subsection: '+ item.items + ',Title: ' + item.url + '</li>'); 
        //     console.log(item.multimedia[3].url);       
        // });

        $.each(items, function (i, item) {
            $(".gallery").append("<div class='image-frame'>" + "<a target='_blank'" + " href='"+ item.multimedia[3].url +"'>" + "<img src='"+item.multimedia[3].url+"' alt='Cinque Terre' width='600' height='400'>" + "</a>" + "</div>"); 
            console.log(item.title);       
        });
        }
    });
});




