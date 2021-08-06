// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCp2s8g0MIs_syHNbMbOSi5okg73kcjzn8",
    authDomain: "mike-wazouskis-guitter.firebaseapp.com",
    databaseURL: "https://mike-wazouskis-guitter-default-rtdb.firebaseio.com",
    projectId: "mike-wazouskis-guitter",
    storageBucket: "mike-wazouskis-guitter.appspot.com",
    messagingSenderId: "606093987803",
    appId: "1:606093987803:web:6d9471a6397525bce3a1fe"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name")
  user_name=localStorage.getItem("room_name")
  function send()
  {
  msg=document.getElementById("msg.value").value
  firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
  });
  document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
 firebase_msg_id = childKey;
 msg_data = childData;
   console.log(firebase_msg_id);
   console.log(msg_data);
   name=msg_data['name'];
   msg=msg_data['msg'];
   like=msg_data['like'];
   name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> <h4>";
   msg_with_tag="<h4 class='msg_h4'>"+msg+"</h4>"; 
   like_button="<button class='btn btn-warning' id="+firebase_msg_id+"value="+like+"onclick='updatelike(this.id)'>";
   span_with_tag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";
   row=name_with_tag+msg_with_tag+like_button+span_with_tag;
   document.getElementById("output").innerHTML+=row;

   //End code
  }});});}
getData();                                                            
function updatelike(msg_id)
{
console.log("click on like button"+msg_id);
button_id=msg_id;
likes=document.getElementById(button_id).value;
updatelike=Number(likes)=1;
console.log(updatelike);
firebase.database().ref(room_name).child(msg_id).update({
like:updatelike
});
}
function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}