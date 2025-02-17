document.getElementById("butn").addEventListener("click",
()=>{
    let Num=document.getElementById("num").value;
    let Num1=document.getElementById("num1").value;

    let sum= parseInt(Num)+ parseInt(Num1);

    let newDiv=document.createElement("div")
    newDiv.innerHTML="the sum calculation is"+ sum;
    document.body.appendChild(newDiv);
}


)
document.getElementById("butn1").addEventListener("click",
()=>{
    let Num=document.getElementById("num").value;
    let Num1=document.getElementById("num1").value;

    let sum= parseInt(Num)* parseInt(Num1);

    let newDiv=document.createElement("div")
    newDiv.innerHTML="the multiply calculation is"+ sum;
    document.body.appendChild(newDiv);
}


)
document.getElementById("butn2").addEventListener("click",
()=>{
    let Num=document.getElementById("num").value;
    let Num1=document.getElementById("num1").value;

    let sum= parseInt(Num)/ parseInt(Num1);

    let newDiv=document.createElement("div")
    newDiv.innerHTML="the divide calculation is"+ sum;
    document.body.appendChild(newDiv);
}


)
document.getElementById("butn3").addEventListener("click",
()=>{
    let Num=document.getElementById("num").value;
    let Num1=document.getElementById("num1").value;

    let sum= parseInt(Num)- parseInt(Num1);

    let newDiv=document.createElement("div")
    newDiv.innerHTML="the subtract calculation is"+ sum;
    document.body.appendChild(newDiv);
}


)
document.getElementById("butn4").addEventListener("click",
()=>{
    let Num=document.getElementById("num").value;
    let Num1=document.getElementById("num1").value;

    let sum= parseInt(Num1) * parseInt(Num)/100;

    let newDiv=document.createElement("div")
    newDiv.innerHTML="the persent calculation is"+ sum;
    document.body.appendChild(newDiv);
}


)