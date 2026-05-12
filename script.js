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