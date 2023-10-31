function adduser(){
    un=document.getElementById("username").value;
    localStorage.setItem("user_name",un)
    window.location="kwitter_room.html"
    }