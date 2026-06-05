import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
  const firebaseConfig = {
    apiKey: "AIzaSyCniUeFyR5jvC5v6q8_gr4ti11KvIUMuE8",
    authDomain: "tritonplus-a841f.firebaseapp.com",
    projectId: "tritonplus-a841f",
    storageBucket: "tritonplus-a841f.firebasestorage.app",
    messagingSenderId: "461739939898",
    appId: "1:461739939898:web:c2e1aef8807e57625a7d03"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'it';
  const provider = new GoogleAuthProvider();
  
  document.addEventListener("DOMContentLoaded", () => {
    const GoogleLogin = document.getElementById("googleLoginBtn");
    console.log("Found button:", GoogleLogin);
    GoogleLogin.addEventListener("click", function(){
        console.log("Button clicked");
        signInWithPopup(auth, provider)
        .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
            const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
            window.location.href = "mainPage.html";
        }).catch((error) => {
    // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
    // ...
        });
    })
  });
  
/*function changeUsername(){
    //gets the elements
    usernameButton = document.getElementById("usernameButton");
    //usernameTxtBox = document.getElementById("usernameTxtBox");

    //create a listener (checks for any changes )
    usernameButton.addEventListener('click', changeUsername );
    usernameButton.className="show";
}*/



/*function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then(result => {
            const user = result.user;
            document.body.innerHTML = `hello ${user.displayName}`;
            console.log(user);
        })
        .catch(console.log);
}*/


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calendarButton").addEventListener("click", function(){
    this.style.display = "none";
    // alert("button pressed");
    document.getElementById("calendarPanel").classList.add("show");
    document.getElementById("calendarPanel").style.display = "block";
    document.getElementById("calendarPanel").style.position = "fixed";
  });
});


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("calendarClose").addEventListener("click", function(){
    document.getElementById("calendarPanel").classList.remove("show");
    // alert("button pressed");
    document.getElementById("calendarButton").style.display = "inline-block";
  });
});