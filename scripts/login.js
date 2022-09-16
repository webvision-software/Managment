function login(){
    let usrname = document.getElementById("username").value;
    let pass= document.getElementById("password").value;
    
    
if(usrname  == admin["username"] &&  pass == admin["password"]){
    sessionStorage.setItem("username", usrname);
    sessionStorage.setItem("password", pass);
    window.open("home.html","_self");

}else{
document.getElementById("errormessage").innerHTML = "Der Benutzername oder das Passwort ist falsch";
}
    
}


function handle(e){
if(e.keyCode === 13){
    e.preventDefault(); 

    login();
}
}


