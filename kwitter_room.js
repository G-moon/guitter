var firebaseConfig = {
      apiKey: "AIzaSyCp2s8g0MIs_syHNbMbOSi5okg73kcjzn8",
      authDomain: "mike-wazouskis-guitter.firebaseapp.com",
      projectId: "mike-wazouskis-guitter",
      storageBucket: "mike-wazouskis-guitter.appspot.com",
      messagingSenderId: "606093987803",
      appId: "1:606093987803:web:6d9471a6397525bce3a1fe"
    };
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +"!";
function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"add room name"
});
localStorage.setItem("room_name",room_name);
window.location="guitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("roomname-"+Room_names);
     row="<div class='room_name' id="+Room_names+"onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom() 
{ room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ 
purpose : "adding room name"
});
localStorage.setItem("room_name", room_name); 
window.location = "guitter_page.html"; }
function RedirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);
window.location="guitter_page.html";
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}
