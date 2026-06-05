import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged,signOut} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";
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
        console.log("user is not logged in");

    }
})

function logOut(e){
    e.preventDefault();

    signOut(auth).then(() => {
  // Sign-out successful.
        console.log("signed out");
        window.location.href = "index.html"
    }).catch((error) => {
  // An error happened.
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.getElementById("profileButton");
    const profile = document.getElementById("profile");
    const logout_btn = document.getElementById("profile_signOut");
    const exitProfile = document.getElementById("exitProfile");

    logout_btn.addEventListener("click", logOut);

    profileButton.addEventListener('click', ()=>{

        if(profile.style.display === 'none' || profile.style.display === ''){
            profile.style.display = 'block'
        } else{
            profile.style.display = "none";
        }
    });
    exitProfile.addEventListener('click', ()=>{

        if(profile.style.display != 'none' || profile.style.display != ''){
            profile.style.display = 'none'
        } else{
            profile.style.display = "block";
        }
    });
});

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


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

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("likeButton").addEventListener("click", function(){
    alert("liked the post");
  });
});
  