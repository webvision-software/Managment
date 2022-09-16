function deleteassignment(){
document.getElementById("removeBox").style.display = "block";
}

function deleteOfficial(){
    let username = sessionStorage.getItem("username");
    let number = document.getElementById("assignNumber").value;
    let count = parseInt(sessionStorage.getItem("assigncount"));
    firebase.database().ref(username + "assignment" + number).remove();
    sessionStorage.removeItem("assignment" + number)

    firebase.database().ref(username + "assigncount").push().set({
        "count": count-1
    });
        
    setTimeout(function(){
location.reload();
    },200);
      
}