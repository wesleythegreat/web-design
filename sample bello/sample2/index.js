window.onload=function() {

    var input = document.getElementById('testing');
    var clickCounter=0;
    input.onclick = function() {
     clickCounter++;
     if (clickCounter==1) {
        document.getElementById("demo").innerHTML = "my name is wesley";
     }
     else if(clickCounter==2){
        document.getElementById("demo").innerHTML = "I live in San Pascual Obando Bulacan";
     }
     else if (clickCounter==3){
        document.getElementById("demo").innerHTML = "I love my girlfriend";
        window.alert("It's the end of clicking")
     }
     else if(clickCounter==4){
        document.getElementById("demo").innerHTML = '';
     }
    }
}
function validateform(){
    let x = document.getElementById("lem").value;
    let text;
    if (x ==""){
        alert("Name must be filled out");
        return false;
    }else{
        text="your name is "+x;
    }
    document.getElementById("lim").innerHTML=text;
    
}
function go(what){
    document.getElementById("id").innerHTML = what;
}
function blah(){
    document.getElementById("id").innerHTML = "";
}
console.log("done!")

