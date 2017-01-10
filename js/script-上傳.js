// $(document).ready(function(){
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCnyVc25JVedpfLpKq41DwZqwxxkIjzEfM",
//     authDomain: "ntue-backstage.firebaseapp.com",
//     databaseURL: "https://ntue-backstage.firebaseio.com",
//     storageBucket: "ntue-backstage.appspot.com",
//     messagingSenderId: "205231721291"
//   };
//   firebase.initializeApp(config);
//
// var storageRef = firebase.storage().ref();
//
// const $file = $('#homework');
// const $btnload = $('#btnload');
//
// // Load
// $btnSubmit.click(function(){
//   var user = firebase.auth().currentUser;
//   const $userName = $('#userName').val();
//   const userName = $('#userName').val();
//
//   const promise = user.updateProfile({
//     displayName: $userName,
//     photoURL: photoURL
//   });
//   promise.then(function() {
//
//     console.log("Update successful.");
//     user = firebase.auth().currentUser;
//     if (user) {
//       console.log(user.uid);
//        $img.attr("src",user.photoURL);
//     };
//     window.location.href = "./作業區.html";
//
//   });
// });
// });
