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

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");


  
  function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}