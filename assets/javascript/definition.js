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
var apiKeySp = "6b3cae2a-60ad-48a2-8ad6-6a83102b5b73";
$(document).ready(function() {
  getWord();
//   console.log(getMeaning("pie"));
  //   $this.on("click", function(e) {
  //     // alert("clicked");
  //     saveWord($(this).html());console.log(getMeaning("apple"));

  //   });
  $("div span").on("click", function(e) {
      console.log($(this).html());
    saveWord($(this).html());
  });
  //   dictionary buttons
  $("button.translators").on("click", function() {
    if (this.id === "btnEng") {
      language = 0;
    } else if (this.id === "btnGrm") {
      language = 1;
    } else if (this.id === "btnSpn") {
      language = 2;
    } else if (this.id === "saved-words-btn") {
        $("#front-page").css("display","none");
        $("#saved-words").css("display","inline");
      var user = firebase.auth().currentUser;
    //   alert("saved Words");
    //   if (user) {
        firebase
          .database()
          .ref("users/" + user.uid)
          .on("value", function(snapshot) {
            var currentWords = snapshot.val().words;
            // console.log(currentWords + " are the current words");
            // var wordArray = currentWords.spilt(",");
            var wordArray = currentWords.split(",");
            // console.log(wordArray + " is the word array");
            // console.log(wordArray.length + " is the word array");
            $(".saved-words-row > tbody").empty();

            // console.log
            for (let i = 0; i < wordArray.length; i++) {
                console.log(wordArray[i]);
                addingSavedRows(wordArray[i]);
            //   alert("clicked");
            }
          });
    //   }
    }
    // console.log("language " + language);
  });
  $("#search-bar").on("click", function() {
    $.ajax({
      url:
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
      crossDomain: true
    }).then(function(response) {
    //   console.log(response);
      // console.log("daves dumb guess???      " + response.content)
      // console.log("1 : " + response.Array[0].content);
      // console.log('2: ' + response.data[0].content);
      console.log("paul pilfers poodles playfully:   " + response[0].content);

      $(".wiki-text").html(response[0].content);
      getWord();
    });
  });
});

function getMeaning(word) {

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
      var meaning = "";

    //   console.log(response);
      // var key = '0';
      // console.log(response.key);

      // for (var i = 0; i < results.length; i++) {
      //     console.log(results[i]);

      // }
      if (results !== undefined && typeof results !== "undefined") {

        // if(results.shortdef === undefined || results[0].shortdef === undefined){
        //     return;
        // }
        if (
          typeof results[0].shortdef !== "undefined" &&
          !(results[0].shortdef === undefined)
        ) {
          if (results[0] === undefined) {
            meaning = results.shortdef[0];
            // console.log(results.shortdef[0]);
            // return meaning;
          } else {
            meaning += results[0].shortdef[0];
            // console.log(results[0].shortdef[0]);
            // return meaning;
          }
          $(".trans-text").html("<h2>" + word + "</h2>" + meaning);
        //   console.log(meaning);
        //   return meaning;
        } else {
          console.log("error in reading short definition");
        }
      }
    //   return meaning;
    },
    error: function() {}
  });
//   return meaning;
}

function getWord() {
  $(".wiki-text").each(function() {
    var $this = $(this);
    $this.html($this.text().replace(/\b(\w+)\b/g, "<span>$1</span>"));
    // $this.addClass(".wiki-text");
    // alert("wiki body");

    // for a clicked word, get the current user and add it to the user's saved words list
  });

  $("div span").hover(
    function() {
      $(this).css("background-color", "#6dd8ff");
      var meaning = "";
      if (language === 0) {
        meaning = getMeaning($(this).html());
        // $(".trans-text").html("<h2>" + $(this).html() + "</h2>" + getMeaning($(this).html()));
      } else if (language === 2) {
        meaning = getMeaningEsp($(this).html());
      }
      // alert("wiki-text");
    },
    function() {
      $(this).css("background-color", "");
    }
  );
}
function getMeaningEsp(word) {
  var meaning = "";
  $.ajax({
    url:
      "https://www.dictionaryapi.com/api/v3/references/spanish/json/en" +
      word +
      "?key=" +
      apiKeySp,
    // url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/json/'+word+'?key='+apiKey,
    method: "GET",
    // dataType: "jsonp"
    success: function(response) {
      var results = response;
    //   console.log(response);
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
            // console.log(results.shortdef[0]);
            // return meaning;
          } else {
            meaning = results[0].shortdef[0];
            // console.log(results[0].shortdef[0]);
            // return meaning;
          }
          $(".trans-text").html("<h2>" + word + "</h2>" + meaning);
        } else {
          console.log("error in reading short definition");
        }
      }
    },
    error: function() {}
  });
  return meaning;
}

function addingSavedRows(word){
    // console.log(getMeaning("apple"));
  var newRow;

  // Append the new row to the table
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
            console.log("adding");

          var results = response;
          var meaning = "";
    
          if (results !== undefined && typeof results !== "undefined") {
    
            if (
              typeof results[0].shortdef !== "undefined" &&
              !(results[0].shortdef === undefined)
            ) {
              if (results[0] === undefined) {
                meaning = results.shortdef[0];
                // console.log(meaning);
              } else {
                meaning += results[0].shortdef[0];
                // console.log(results[0].shortdef[0]);
              }
              console.log(meaning);

              newRow = $("<tr>").append(
                $("<td>").text(word),
                // $("<td>").text(""),
                $("<td>").text(meaning)
              );
              $(".saved-words-row > tbody").append(newRow);
            } else {
              console.log("error in reading short definition");
            }
          }
        },
        error: function() {}
      });
      

}
function saveWord(word) {
  // if user is signed in, utilize user's storage
  var user = firebase.auth().currentUser;
  var wordArray;
  console.log(wordArray);
//   var userRef = "users/" + user.uid;
//   console.log(user);
  if (user) {
    // console.log("saveWord");
    var currentWords = "";
    firebase
      .database()
      .ref("users/" + user.uid)
      .on("value", function(snapshot) {
        // console.log(snapshot.val().words);
        currentWords = snapshot.val().words;
      });

    // console.log(currentWords);
    if (currentWords === "") {
      currentWords += word;
      wordArray = [word];
    } else {
      currentWords = currentWords + ", " + word;

      wordArray = currentWords.split(",");
    console.log((typeof currentWords));

    }

    console.log(wordArray);
    // if(currentWords.indexOf(word) === -1){
        firebase
        .database()
        .ref("users/" + user.uid)
        .update({
          words: currentWords
          //some more user data
        });
    // }
    // for (var i = 0; i < wordArray.length; i++) {
    //     var check = 0;
    //     for (var j = 0; j < word.length; j++) {
    //         if (wordArray[i] == word[j]) {
    //             check = 1;
    //             ++counts[j];
    //         }
    //     }
    //     if (check == 0) {
    //         words.push(result[i]);
    //         counts.push(1);
    //     }
    //     check = 0;
    // }


    // var newRow = $("<tr>").append(
    //     $("<td>").text(word),
    //     $("<td>").text(),
    //     $("<td>").text(t),
    //   );

    //   // Append the new row to the table
    //   $(".saved-words-row > tbody").append(newRow);
    // console.log(currentWords);

    // firebase.database().ref("users/" + user.uid).on("value", function(snapshot){
    //     console.log(snapshot.val().firstName);
    //   })
    // firebase.database().ref("users/" + user.uid).child('words').update(word);
    // firebase.database().ref("users/" + user.uid).on("value", function(snapshot){
    //     console.log(snapshot.val().words);
    //     snapshot.val().words += word;
    //   })
  }
}
// firebase.database().ref().on("value", function(snapshot){
//     console.log(user.uid.firstName);
//     console.log(user.uid.lastName);
//     $("#welcome-tag").text("Welcome, "+snapshot.val().firstName);
//   })

// otherwise, commit to session storage for Guest
// }
// else{
//     sessionStorage.clear();
//     // sessionStorage.setItem("word")
// }

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
