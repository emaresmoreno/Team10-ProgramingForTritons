function changeUsername(){
    //gets the elements
    usernameButton = document.getElementById("usernameButton");
    //usernameTxtBox = document.getElementById("usernameTxtBox");

    //create a listener (checks for any changes )
    usernameButton.addEventListener('click', changeUsername );
    usernameButton.className="show";
}

document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.getElementById("profileButton");
    const profile = document.getElementById("profile");

    profileButton.addEventListener('click', ()=>{

        if(profile.style.display === 'none' || profile.style.display === ''){
            profile.style.display = 'block'
        }
    });
});


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

