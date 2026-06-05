import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
console.log("mainScript.js loaded");
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
const user = auth.currentUser;

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const profileImage = user.photoURL;

    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("profileImage").src = profileImage;
    document.getElementById("profileImg1").src = profileImage;

}

onAuthStateChanged(auth, (user) =>{
    if(user){
        updateUserProfile(user);
        const uid = user.ui;
        return uid;
    } else{

    }
})

document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.getElementById("profileButton");
    const profile = document.getElementById("profile");

    profileButton.addEventListener('click', ()=>{

        if(profile.style.display === 'none' || profile.style.display === ''){
            profile.style.display = 'block'
        } else{
            profile.style.display = "none";
        }
    });
});
  