function Logout(){
    window.location="index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyCNXn7OhDavcMa84th6H_WJb2zwE5t4_uo",
    authDomain: "kwitterapphw.firebaseapp.com",
    databaseURL: "https://kwitterapphw-1ccbb-default-rtdb.firebaseio.com",
    projectId: "kwitterapphw",
    storageBucket: "kwitterapphw.appspot.com",
    messagingSenderId: "377051778008",
    appId: "1:377051778008:web:cbc088b7e1a602a87f00ad"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+username+"!";


function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name"+Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
//End code
});});}
getData();


function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="Kwitter_page.html";
}


function addRoom(){
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        shoe:"lace"
    });
    localStorage.setItem("room_name", room_name);
    window.location="Kwitter_page.html"
}
