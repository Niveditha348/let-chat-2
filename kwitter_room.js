
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVlNOAsXa1G6GdNQ_3t3Eolm35p_CRHsQ",
  authDomain: "class-test-a2226.firebaseapp.com",
  databaseURL: "https://class-test-a2226-default-rtdb.firebaseio.com",
  projectId: "class-test-a2226",
  storageBucket: "class-test-a2226.appspot.com",
  messagingSenderId: "939093532882",
  appId: "1:939093532882:web:455cf3e817884bdf99cd0b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("Username");
  document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

  function addroom() {
         room_name = document.getElementById("room_name").value;

        localStorage.setItem("Roomname",room_name);
    
        window.location = "kwitter_page.html";

        firebase.database().ref("/").child(room_name).update({
              purpose: "Adding Room Name"
        });
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
