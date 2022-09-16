
var username = sessionStorage.getItem("username")

    firebase.database().ref(username+"assigncount").on("child_added", function (snapshot) {
        let count = snapshot.val().count
        sessionStorage.setItem("assigncount", count);
    });


function addAssignment(){
    var username = sessionStorage.getItem("username")
    var information = document.getElementById("assignInfoField").value;
    var moreinformation = document.getElementById("moreAssignInfoField").value;
    var productionmaterials = document.getElementById("productionMaterials").value;
    var customer = document.getElementById("customer").value;
    

var assigncount = JSON.parse(sessionStorage.getItem("assigncount"));


    firebase.database().ref(username + "assignment" + assigncount++).push().set({
        "information": information,
        "moreInformation" : moreinformation,
        "productionmaterials" : productionmaterials,
        "customer": customer
        });
       


   
    firebase.database().ref(username + "assigncount").push().set({
            "count" : assigncount
            });

      
setTimeout(function(){
location.reload();
},1000)

}
