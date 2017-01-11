$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnyVc25JVedpfLpKq41DwZqwxxkIjzEfM",
    authDomain: "ntue-backstage.firebaseapp.com",
    databaseURL: "https://ntue-backstage.firebaseio.com",
    storageBucket: "ntue-backstage.appspot.com",
    messagingSenderId: "205231721291"
  };
  firebase.initializeApp(config);

    //Get Elementary
    var uploader =document.getElementsById('uploader');
    var fileButton =document.getElementsById('fileButton');

    //listen for file selection
          fileButton.addEventListener('change',function(e){
            //get file
          var file=e.target.files[0];
          //create a storage ref
          var storageRef=firebase.storage().ref('data'+file.name);
          //upload file
          var task=storageRef.put(file);
          //upload progress bar
          task.on('state_charged',

                function progress(snapshot){
                  var percentage=(snapshot.bytesTransferred/
                    snapshot.totalBytes)*100;
                    uploader.value=percentage;
                },

                function error(err){
                },

                function complete(){

                }
         );
      });

});
