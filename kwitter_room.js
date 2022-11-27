
const firebaseConfig = {
      apiKey: "AIzaSyCDghOUzAjUMzWVz69ACcMYSpCQrI8wpjM",
      authDomain: "kwittwer-52438.firebaseapp.com",
      databaseURL: "https://kwittwer-52438-default-rtdb.firebaseio.com",
      projectId: "kwittwer-52438",
      storageBucket: "kwittwer-52438.appspot.com",
      messagingSenderId: "981050187910",
      appId: "1:981050187910:web:287e9a62588f1607417107"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var username =  localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML ="welcome " + username + " ! ";
    
function  addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose :  "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class=room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;


      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";

}

