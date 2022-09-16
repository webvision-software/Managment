
sessionStorage.setItem("count",0);
search();
function search(){
let count = parseInt(sessionStorage.getItem("count"));

if(count == 0){
    document.getElementById("noText").innerHTML = "Aktuell keine Aufträge"
   
}else{
    document.getElementById("noText").innerHTML = ""
}
setTimeout(function(){

let count = parseInt(sessionStorage.getItem("count"));
let username = sessionStorage.getItem("username")


firebase.database().ref(username + "assignment" + count).on("child_added", function (snapshot) {
    
var information =  snapshot.val().information;
var moreInformation = snapshot.val().moreInformation;
var productionMaterials = snapshot.val().productionmaterials;
var customer = snapshot.val().customer;

var FullAssignment = {
    info: information,
    moreInfo: moreInformation,
    prodmat: productionMaterials,
    cust: customer

}


sessionStorage.setItem("assignment" + count, JSON.stringify(FullAssignment));

});
setTimeout(function(){
    createElements();
},200)

},200);
}
function createElements(){



    let count = parseInt(sessionStorage.getItem("count"));
    let FullAssignment = JSON.parse(sessionStorage.getItem("assignment" + count));
    if(sessionStorage.hasOwnProperty("assignment" + count)){

    
    
 
    
    var information = FullAssignment["info"];
    var moreInformation = FullAssignment["moreInfo"];
    var productionmaterials = FullAssignment["prodmat"];
    var customer = FullAssignment["cust"];
    
    
    let div = document.createElement('div');
    div.className = 'assignments';
    let heading = document.createElement("h1");
    let headingText = document.createTextNode("Auftrag" + " " + count);
    heading.appendChild(headingText);
    div.appendChild(heading);
    let heading5 = document.createElement("h3");
    let text9 = document.createTextNode("Kunde");
    heading5.appendChild(text9);
    div.appendChild(heading5);
    let p5 = document.createElement("p");
    let text10 = document.createTextNode(customer);
    p5.appendChild(text10);
    div.appendChild(p5)
    let heading1 = document.createElement("h3");
    let text2 = document.createTextNode("Auftragsinformationen");
    heading1.appendChild(text2);
    div.appendChild(heading1)
    let p = document.createElement("p");
    let text1 = document.createTextNode(information);
    p.appendChild(text1);
    div.appendChild(p);
    let heading2 = document.createElement("h3");
    let text3 = document.createTextNode("Weitere Informationen");
    heading2.appendChild(text3);
    div.appendChild(heading2);
    let p2 = document.createElement("p");
    let text4 = document.createTextNode(moreInformation);
    p2.appendChild(text4);
    div.appendChild(p2);
    let heading4 = document.createElement("h3");
    let text7 = document.createTextNode("Produktionsstoffe");
    heading4.appendChild(text7);
    div.appendChild(heading4);
    let p4 = document.createElement("p");
    let text8 = document.createTextNode(productionmaterials);
    p4.appendChild(text8);
    div.appendChild(p4);
    let br = document.createElement("br");
    div.appendChild(br);
    let btn = document.createElement("button");
    let text11 = document.createTextNode("Fertig");
    btn.setAttribute("onClick", "deleteassignment()")
    btn.appendChild(text11);
    div.appendChild(btn);
    document.body.appendChild(div)

check();
}else{
    check();
}
}

function  check(){
    let count = parseInt(sessionStorage.getItem("count"));

if(count+5 == sessionStorage.getItem("assigncount")){
  
    
}else{
    if(count == 15){
        if(count == 15 && sessionStorage.getItem("assigncount") == 0){
            document.getElementById("noText").innerHTML = "Aktuell keine Aufträge"
            return;
        }else{
            return;
        }
           
        }
      
    }
    
  setTimeout(function(){
  let count = parseInt(sessionStorage.getItem("count"));
  sessionStorage.setItem("count", count+1)
  search();
    
},100)
    
}
  



