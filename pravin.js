let username = {
    name:"pravin kumar",
    class:8,
    roll_no: 25,
}
console.log(username);

function boy(){
    num1= 10;
    num2 = 2;
    let sum = num1 * num2;
    console.log(sum)
}
boy();

// function submit(){
//     alert= "please check it"
// }
let a = document.getElementById("butn")
a.addEventListener("click", function clickme(){
       alert("button was click")
})
let colr = document.getElementById("color")
colr.addEventListener("click", function change()
{
  document.body.style.background ="red";
})

let rey=document.getElementById("grey")
function grey(){
    rey.style.border = "4px solid green"
    rey.body.style.background="#282828"
}

// let n= document.getElementById("num").value;
// let n1= document.getElementById("num1").value;
 

document.getElementById("b").addEventListener
("click", ()=>{
    let na = document.getElementById("num").value;
    let na1=document.getElementById("num1").value;
    // console.log(na);
    // console.log(na1);
    let sum= parseInt(na) + parseInt(na1);
    console.log(sum);
    let newDiv = document.createElement("div")
    newDiv.innerHTML="the sum is"+ sum;
    document.body.appendChild(newDiv); 

})
 document.getElementById("c").addEventListener
 ("click",()=>{
    let nato1 = document.getElementById("nm1").value;
    let nato2 = document.getElementById("nm2").value;
    let sum= parseInt(nato1) * parseInt(nato2);
    console.log(sum)
    let newDiv= document.createElement("div")
    newDiv.innerHTML="the sum of"* sum;
    document.body.appendChild(newDiv);
})
function click(){
    alert = "you are not enter";
}