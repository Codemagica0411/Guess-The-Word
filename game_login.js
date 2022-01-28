function adduser() {
   playerunouser = document.getElementById("playerunoname").value;
   playerdosuser = document.getElementById("playerdosname").value;
   localStorage.setItem("playerunouser",playerunouser);
   localStorage.setItem("playerdosuser", playerdosuser);
   window.location = "game_page.html";
}