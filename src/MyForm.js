/**
 * Created by 44131716 on 3/22/2020.
 */
function showDetails(){
    testDetails();
    document.getElementById("display").innerHTML = "Entered Name: " + document.getElementById("name").value+"<br>" +"Entered PSID: "+document.getElementById("psid").value;
    
}

function testDetails(){
    document.getElementById("errorForName").innerHTML = "";
    document.getElementById("errorForID").innerHTML = "";
    var name = document.getElementById("name").value;
    var psid = document.getElementById("psid").value;
    var patternForPsid = /^[0-9]+$/;
    var patternForName = /^[0-9a-zA-Z\s]+$/;
    if(!(patternForName.test(name)))
      document.getElementById("errorForName").innerHTML = "Inavlid Name !!" 
    else
     document.getElementById("errorForName").innerHTML = "";

    if(!(patternForPsid.test(psid)))
      document.getElementById("errorForID").innerHTML = "Inavlid psid !!" ;
      else
      document.getElementById("errorForID").innerHTML = "";
}