
// alert("worked"); 

$(document).ready(function(){
    $('.wiki-text').each(function() {
        var $this = $(this);
        $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
        // $this.addClass(".wiki-text");
        // alert("wiki body");
    });
    
    $('div span').hover(
        function() { 
            $(this).css('background-color','#6dd8ff'); 
            // alert(getTheMeaningOfTheWord($(this).html()));
            getTheMeaningOfTheWord($(this).html());
            // alert("wiki-text");
        },
        function() { 
            $(this).css('background-color',''); 
        }
    );


})

var apiKey = '91bf7c64-058e-48ed-80fc-ccfba37495fc';

function getTheMeaningOfTheWord(word){

    var meaning = "";
    $.ajax({
        url: "https://www.dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key="+apiKey,
        // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/json/'+word+'?key='+apiKey,
        method: "GET",
        // dataType: "jsonp"
        success: function(response) {
            var results = response;
            console.log(response);
            // var key = '0';
            // console.log(response.key);
            
    
            // for (var i = 0; i < results.length; i++) {
            //     console.log(results[i]);
                
            // }
            if(typeof results[0].shortdef !== 'undefined' && !(results[0].shortdef === undefined))
            {
                if(results[0] === undefined){
                    meaning = results.shortdef[0];
                    console.log(results.shortdef[0]);
                }
                else{
                    meaning = results[0].shortdef[0];
                    console.log(results[0].shortdef[0]);
                }
                $(".trans-text").html("<h2>"+word+"</h2>"+meaning);
            }

        
        
        },
        error: function() {

            
        }
        // response is an xml doc
        // console.log(response);
        // var xml = response;
        // var xmlDoc = $.parseXML( xml );
        // $xml = $( xmlDoc );
        // var $dt = $xml.find( "dt" );
        // console.log($dt);
        // $.parseXML(response).find('dt').each(function(index){
        //     var provider = $(this).find('Provider').text();
        //     var channel = $(this).find('FeedCommonName').text();
        //     var hd = $(this).find('FeedIsHD').text();
        //     $('.box ul').append('<li>'+channel+'</li>');
        // });
        // alert(word);

        // $(response).find(word+"[1]").each(function(){
        //     alert(word);
        //     $(this).find("def").each(function(){
        //         $(this).find("dt").each(function(){
        //             var name = $(this).text();
        //             alert(name);
        //         });
        //     });
        // });

        // $(response).find(word+"[1]").find('def').each(function(){
        //     alert("hello?")
        //     $(this).children().each(function(){
        //         var tagName = this.tagName;
        //         var val= $(this).text();
        //         console.log(val);
                
        //     })
        // });
        

        
    });
    return word + ": "+ meaning;
}

//   $.ajax( {
//     url: "https://en.wikipedia.org/w/api.php",
//     jsonp: "callback", 
//     dataType: 'jsonp', 
//     data: { 
//         action: "query", 
//         list: "search", 
//         srsearch: "javascript", 
//         format: "json" 
//     },
//     xhrFields: { withCredentials: true },
//     success: function(response) { alert("worked")}
// });

