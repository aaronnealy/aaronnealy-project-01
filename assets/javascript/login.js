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
    /********************************************** NEW USER ***************************************************/
    if (this.id === "new-user-btn") {
      // alert("new user btn");

      email = $("#setup-email").val();
      password = $("#setup-password").val();
      console.log(email + " email");
      console.log(password + " password");

      if (email.length < 6) {
        alert("Please enter an email address.");
        return;
      }
      if (password.length < 6) {
        alert("Please enter a password.");
        return;
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then( function() {
            var user = firebase.auth().currentUser;
            // alert(JSON.stringify(user));
            // var user = 
            // alert("user created");
            // Optional

            // if(user)
            // {
              $("#display-login-btn").css("display", "none");
              $("#signout-btn").css("display", "inline");
            // }
            firebase
              .database()
              .ref("users/" + user.uid)
              .set({
                firstName: $("#first-name").val(),
                lastName: $("#last-name").val(),
                words : "cool"
                //some more user data
              });

              console.log(user);
              
              console.log(firebase.auth().currentUser.email);
              firebase.database().ref("users/" + user.uid).on("value", function(snapshot){
                // console.log(user.uid.firstName);
                // console.log(user.uid.lastName);
                $("#welcome-tag").text("Welcome, "+snapshot.val().firstName);
              })
              firebase.auth().onAuthStateChanged( user => {
                if (user) { this.userId = user.uid }
              });


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
    /********************************************** LOGIN ***************************************************/
    else if (this.id === "login-btn") {
      var user = firebase.auth().currentUser;
      console.log("Current User: "+ JSON.stringify(user));

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
          if (user && !(user.isAnonymous)) {
            $("#display-login-btn").css("display", "none");
            $("#signout-btn").css("display", "inline");
            console.log(firebase.auth().currentUser.email);
            firebase.database().ref("users/"+user.uid).on("value", function(snapshot){
              // console.log(user.uid.firstName);
              // console.log(user.uid.lastName);
              $("#welcome-tag").text("Welcome, "+snapshot.val().firstName);
            })
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
      // alert("clicked");
      // if (user) {
        firebase.auth().signOut().then(function() {
          $("#signout-btn").css("display", "none");
          $("#display-login-btn").css("display", "inline");
          $("#welcome-tag").text("You have signed out successfully.");
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
        });
      // }
        // alert("clicked");
        // [START signout]
        // firebase.auth().signOut();
        // [END signout]

      // }
    }
    else if(this.id === "search-bar"){
      $.ajax({
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        // crossDomain: true,
    }).then(function (response) {
        console.log(response);
        // console.log("daves dumb guess???      " + response.content)
        // console.log("1 : " + response.Array[0].content);
        // console.log('2: ' + response.data[0].content);
        console.log('paul pilfers poodles playfully:   ' + response[0].content);

        $("#wiki-text").html(response[0].content);
    });
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
