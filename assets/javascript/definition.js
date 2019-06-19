var firebaseConfig = {
  apiKey: "AIzaSyDndDgQIX4a7GKRC0ajkUSl1CiRO_BRcD4",
  authDomain: "project-test-56b7d.firebaseapp.com",
  databaseURL: "https://project-test-56b7d.firebaseio.com",
  projectId: "project-test-56b7d",
  storageBucket: "project-test-56b7d.appspot.com",
  messagingSenderId: "737064505924",
  appId: "1:737064505924:web:3a8badefacc30720"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var language = 0;
var apiKey = "91bf7c64-058e-48ed-80fc-ccfba37495fc";

$(document).ready(function() {
  $(".wiki-text").each(function() {
    var $this = $(this);
    $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
    // $this.addClass(".wiki-text");
    // alert("wiki body");

    // for a clicked word, get the current user and add it to the user's saved words list
    $this.on("click", function(e) {
      // alert("clicked");
    });
  });

  $("div span").hover(
    function() {
      $(this).css("background-color", "#6dd8ff");
      // alert(getTheMeaningOfTheWord($(this).html()));
      getTheMeaningOfTheWord($(this).html());
      // alert("wiki-text");
    },
    function() {
      $(this).css("background-color", "");
    }
  );


//   dictionary buttons

$("#btnEng").on("click", function() {
    console.log("You Clicked English");
});

$("#btnGrm").on("click", function(){
    console.log("You Clicked German");
    
});

$("#btnSpn").on("click", function(){
    console.log("You Clicked Spanish");
    
});
});

function getTheMeaningOfTheWord(word) {
  var meaning = "";
  $.ajax({
    url:
      "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" +
      word +
      "?key=" +
      apiKey,
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
      if (results !== undefined && typeof results !== "undefined") {
        if (
          typeof results[0].shortdef !== "undefined" &&
          !(results[0].shortdef === undefined)
        ) {
          if (results[0] === undefined) {
            meaning = results.shortdef[0];
            console.log(results.shortdef[0]);
          } else {
            meaning = results[0].shortdef[0];
            console.log(results[0].shortdef[0]);
          }
          $(".trans-text").html("<h2>" + word + "</h2>" + meaning);
        }
        else{
            console.log("error in reading short definition");
        }
      }
    },
    error: function() {}
  });
  return word + ": " + meaning;
}

function saveWord(word) {
// if user is signed in, utilize user's storage
if(firebase.auth().currentUser){


// otherwise, commit to session storage for Guest
}
else{
    sessionStorage.clear();
    // sessionStorage.setItem("word")
}
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
