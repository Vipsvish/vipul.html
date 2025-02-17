let newdiv=document.createElement("div");
newdiv.textContent="this is new div";
document.body.appendChild(newdiv);

function valid(){
    let name = document.getElementById("name").value;
    if (name == ""){
        alert("firstly filled your Name")
        return false;
    }
}
if(10==10.0){
    let score=20;
    score+=2;
    console.log(score);
}
console.log("5"+3);