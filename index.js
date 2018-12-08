var isLog = 0;
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    if (isLog == 1) {
      document.location.href = "/profile.html";
    }
      
    var user = firebase.auth().currentUser;
    if (user!=null){
      var email_id=user.email;
      //document.location.href = "/index.html"; 
    }
  } 
});

function login(){
  isLog = 1;
  var userEmail = document.getElementById("email_field").value.toString();
  var userPass = document.getElementById("passw_field").value.toString();
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });
}

function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

function logout(){
  isLog = 0;
  firebase.auth().signOut();
  document.location.href = "/index.html";
}

function signup(){
  var userEmail = document.getElementById("email_field_sign").value.toString();
  var userPass = document.getElementById("passw_field_sign").value.toString();
  var userNick = document.getElementById("nick_field_sign").value.toString();
  var userSurname = document.getElementById("surname_field_sign").value.toString();
  var userName = document.getElementById("name_field_sign").value.toString();
  var points = 250;
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  });
  var user = {
    email: userEmail,
    nickname: userNick,
    surname: userSurname,
    name: userName,
    points: points
  };
  include("db.js");
  //var userJSON = JSON.stringify(user);
  insertUser(user);
  isLog = 1;
}