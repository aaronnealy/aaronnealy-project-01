$(document).ready(function () {
    $.ajax({
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        // crossDomain: true,
    }).then(function (response) {
        console.log(response);
    });
});
// $('#search').click(function(){

    //     var searchTerm = $('#seachTerm').val();
    //     console.log(searchTerm);

        // var query = "https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search" + searchTerm;
        //https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=cat
//en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=//
// $('#button').on('click', function(e) {
//     e.preventDefault();
// })
//     $.ajax( {
//       url: '/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
//       method: "GET" 
//     }).then(function(response){
//         console.log(response);
//     }) 
//       success: function(data) {



//         var post = data.shift(); // The data is an array of posts. Grab the first one.
//         $('#quote-title').text(post.title);
//         $('#quote-content').html(post.content);

//         // If the Source is available, use it. Otherwise hide it.
//         if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
//           $('#quote-source').html('Source:' + post.custom_meta.Source);
//         } else {
//           $('#quote-source').text('');
//         }
//       }
//       cache: false
//     });
//   });
// });
// var wikiDiv = $("<div class='wiki'>");
// //         $.ajax( {
// $("#output").prepend(wikiDiv);
// //             url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
// //              method: "GET",

// //             // Access-Control-Allow-Origin: *
// //             data: {   

// //                 action: "query", 
// //                 list: "search", 
// //                 srsearch: searchTerm, 
// //                 format: "json" 
// //             },dataType:"jsonp",
// //             xhrFields: { withCredentials: true },
// //             success: function(response) {

// //             }

// //         }).then(function(response){
// //             console.log(response);
// //             console.log(response.query.search[4].wordcount);
// //             console.log(response.query.search[4].snippet);
// // console.log(response.query.search[4].pages);
// //             for  (var i = 0; i < response.query.search.length; i++ ) {
// //                 console.log(response.query.search[i].extract);




// //             var word = response.query.search[i].title;

// //             var para = $("<p>").text("Title: " + word);

// //             wikiDiv.append(para);


// //             }




// //         })
// //     })
// // });

// var xhr = new XMLHttpRequest();

// var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=5&gsrsearch='New_England_Patriots'";

// // Provide 3 arguments (GET/POST, The URL, Async True/False)
// xhr.open('GET', url, true);

// // Once request has loaded...
// xhr.onload = function() {
//     // Parse the request into JSON
//     var data = JSON.parse(this.response);

//     // Log the data object
//     console.log(data);

//     // Log the page objects
//     console.log(data.query.pages)

//     // Loop through the data object
//     // Pulling out the titles of each page
//     for (var i in data.query.pages) {
//         console.log(data.query.pages[i].title);
//     }
// }
// // Send request to the server asynchronously
// xhr.send();
//         // $.getJSON(
//         //     'https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=15&generator=search' +
//         //     '&origin=*' + // <-- this is the magic ingredient!
//         //     '&gsrsearch=', function(data){ /* ... */ }
//         //   );
//         // $.ajax({
//         //     type: "GET",
//         //     url: query,
//         //     async: false,
//         //     dataType: "json",
//         //     // data: { action: 'query', list: 'search', srsearch: $("input[name=Wikipedia").val(), format: 'json'},
//         //     success: function(data){

//         //     },
//         //     error: function(errorMessage){
//         //         alert("Error")
//         //     }
