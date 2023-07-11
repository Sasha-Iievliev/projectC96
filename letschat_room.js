var firebaseConfig = {
    apiKey: "AIzaSyAd7m7Jo6J2dfUHkimHW-ftWsiy_gDCwX4",
    authDomain: "kwitter-d3b26.firebaseapp.com",
    databaseURL: "https://kwitter-d3b26-default-rtdb.firebaseio.com",
    projectId: "kwitter-d3b26",
    storageBucket: "kwitter-d3b26.appspot.com",
    messagingSenderId: "774807373598",
    appId: "1:774807373598:web:0da98ab02beabb69016b0f"
  };
   firebase.initializeApp(firebaseConfig);
   
   username = localStorage.getItem('username');
   document.getElementById('username').innerHTML = 'Welcome '+username;

   function addroom(){
    roomname = document.getElementById('roomname').value;
    localStorage.setItem('roomname',roomname);
    firebase.database().ref("/").child(roomname).update({
          purpose : 'Adding Roomname'
   });
   window.location='letschat_page.html';
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log(Room_names);
    row = '<div id='+Room_names+' class="roomname" onclick="redirectToRoomname(this.id)">#'+Room_names+'</div><hr>';
    document.getElementById('output').innerHTML += row;


    //End code
    });});}
getData();

function redirectToRoomname(name){
    localStorage.setItem('roomname',name);
    window.location="letschat_page.html";
}
