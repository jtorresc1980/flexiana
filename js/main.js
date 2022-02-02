function getRepositorie() {
    var request = new XMLHttpRequest();
    var search = document.getElementById("git").value;
    request.open("GET", "https://api.github.com/users/" + search + "/repos", true);
    request.onload = () => show_list(JSON.parse(request.responseText));
    console.log("consola" + request.responseText);
    request.send();
  }
  
  function show_list(user) {
    var userLst = document.getElementsByClassName("users-list")[0];
    var userUl = document.createElement("ul");
    var valor = user;
    
    for (var i in user) {
      var userLi = document.createElement("li");
      var userRepo = document.createTextNode("_" + user[i].name);
      userLi.appendChild(userRepo);
      userUl.appendChild(userLi);
    }
    userLst.appendChild(userUl);
  }