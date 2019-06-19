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
// firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$(document).ready(function() {
  var email = "";
  var password = "";
  // $("#display-login-btn").css("display", "none");
  // $("#signout-btn").css("display", "inline");
  // user logged in?
  var user = firebase.auth().currentUser;

  // if (user) {
  //   // User is signed in.
  //   console.log(user + " signed in");
  // } else {
  //   // No user is signed in.
  //   console.log("No user is signed in");
  // }
  $(".imp-btn").on("click", function(e) {
    e.preventDefault();
    // alert($("#inputEmail").val());
    // alert($("#inputPassword").val());
    // alert("clicked");
    // new user
    if (this.id === "new-user-btn") {
      // alert("new user btn");

      email = $("#setup-email").val();
      password = $("#setup-password").val();
      console.log(email + " email");
      console.log(password + " password");

      if (email.length < 4) {
        alert("Please enter an email address.");
        return;
      }
      if (password.length < 4) {
        alert("Please enter a password.");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(
          function(user) {
            var user = firebase.auth().currentUser;
            // alert(JSON.stringify(user));
            // Optional

            // if(user)
            // {
              
            // }
            firebase
              .database()
              .ref("users/" + user.uid)
              .set({
                firstName: $("#first-name").val(),
                lastName: $("#last-name").val()
                //some more user data
              });


            firebase.database().ref("users/"+user.uid).on("value", function(e){
              console.log(user.uid.firstName);
              console.log(user.uid.lastName);
            })


          },
          function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          }
        )
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode == "auth/weak-password") {
            alert("The password is too weak.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });
    }
    // login
    else if (this.id === "login-btn") {
      // alert("login btn");
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(email, password)
      //   .then(function() {
      //     user = firebase.auth().currentUser;

      //     if (user) {
      //       // User is signed in.
      //       // function writeUserData(words) {
      //       //   firebase
      //       //     .database()
      //       //     .ref("users/" + user)
      //       //     .set({
      //       //       words: words
      //       //       //some more user data
      //       //     });
      //       // }
      //       alert(user + " signed in");
      //     } else {
      //       // No user is signed in.
      //     }
      //   })
      //   .catch(function(error) {
      //     // Handle Errors here.
      //     var errorCode = error.code;
      //     var errorMessage = error.message;
      //     // alert("user doesn't exist/password wrong");
      //     // ...
      //   });
      var user = firebase.auth().currentUser;
      if (user) {
        $("#display-login-btn").css("display", "none");
        $("#signout-btn").css("display", "inline");
        console.log(firebase.auth().currentUser.email);
        $("#welcome-tag").text("Welcome, "+user.uid.firstName);
      }
      email = $("#input-email").val();
      password = $("#input-password").val();

      if (email.length < 4) {
        alert("Please enter an email address.");
        return;
      }
      if (password.length < 4) {
        alert("Please enter a password.");
        return;
      }
      // Sign in with email and pass.
      // [START authwithemail]
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          user = firebase.auth().currentUser;
          // alert("successful sign in");
          if(user){
            $("#display-login-btn").css("display", "none");
            $("#signout-btn").css("display", "inline");
          }

        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === "auth/wrong-password") {
            alert("Wrong password.");
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
      // [END authwithemail]
    } else if (this.id === "signout-btn") {
      if (firebase.auth().currentUser) {
        // alert("clicked");
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
        $("#signout-btn").css("display", "none");
        $("#display-login-btn").css("display", "inline");
      }
    }
  });
});

window.onload = function() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("Anonymous user signed-in.", user);
    } else {
      console.log(
        "There was no anonymous session. Creating a new anonymous user."
      );
      // Sign the user in anonymously since accessing Storage requires the user to be authorized.
      firebase
        .auth()
        .signInAnonymously()
        .catch(function(error) {
          if (error.code === "auth/operation-not-allowed") {
            window.alert(
              "Anonymous Sign-in failed. Please make sure that you have enabled anonymous " +
                "sign-in on your Firebase project."
            );
          }
        });
    }
  });
};
