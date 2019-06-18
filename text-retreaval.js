

$(document).ready(function(){

    $('#search').click(function(){

        var searchTerm = $('#seachTerm').val();
        console.log(searchTerm);
        
        var query = "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search" + searchTerm;

        $.ajax( {
            url: "https://en.wikipedia.org/w/api.php",
            jsonp: "callback", 
            dataType: 'jsonp', 
            data: { 
                action: "query", 
                list: "search", 
                srsearch: searchTerm, 
                format: "json" 
            },
            xhrFields: { withCredentials: true },
            success: function(response) {
                
            }
            
        }).then(function(response){
            console.log(response);
            console.log(response.query.search[4].wordcount);
            console.log(response.query.search[4].snippet);

            var wikiDiv = $("<div class='wiki'>");

            var word = response.query.search[4].snippet;

            var para = $("<p>").text("Para: " + word);

            wikiDiv.append(para);

            $("#output").prepend(wikiDiv);
            
        })
    })
});
        // $.getJSON(
        //     'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search' +
        //     '&origin=*' + // <-- this is the magic ingredient!
        //     '&gsrsearch=', function(data){ /* ... */ }
        //   );
        // $.ajax({
        //     type: "GET",
        //     url: query,
        //     async: false,
        //     dataType: "json",
        //     // data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia").val(), format: 'json'},
        //     success: function(data){

        //     },
        //     error: function(errorMessage){
        //         alert("Error")
        //     }
            
        // })
