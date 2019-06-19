// var firebaseConfig = {
//     apiKey: "AIzaSyBqUc9gmeD-lszKhmlnmIP_ayqrrZExBMc",
//     authDomain: "translation-project-361ae.firebaseapp.com",
//     databaseURL: "https://translation-project-361ae.firebaseio.com",
//     projectId: "translation-project-361ae",
//     storageBucket: "translation-project-361ae.appspot.com",
//     messagingSenderId: "16272234044",
//     appId: "1:16272234044:web:2ada16e7e189a1c7"
// }

// firebase.initializeApp(firebaseConfig);

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

$(document).ready(function() {
  var email = "";
  var password = "";
  $("#login-btn").on("click", function(e) {
    e.preventDefault();
    // alert($("#inputEmail").val());
    // alert($("#inputPassword").val());
    email = $("#inputEmail").val();
    password = $("#inputPassword").val();
    // firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
    //     var user = firebase.auth().currentUser;
    //     // alert(JSON.stringify(user)); // Optional

    // }, function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    // });

    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(function() {
    //     var user = firebase.auth().currentUser;

    //     if (user) {
    //       // User is signed in.
    //       function writeUserData(words) {
    //         firebase.database().ref('users/' + user).set({
    //             words: words
    //           //some more user data
    //         });
    //       }
    //     } else {
    //       // No user is signed in.
    //     }
    //   })
    //   .catch(function(error) {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     alert("user doesn't exist/password wrong");
    //     // ...
    //   });
  });
});
