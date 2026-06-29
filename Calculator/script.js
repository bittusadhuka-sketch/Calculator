const display=document.getElementById("display");
const history=document.getElementById("history");

function appendValue(value){
display.value+=value;
}

function clearDisplay(){
display.value="";
history.innerHTML="";
}

function deleteLast(){
display.value=display.value.slice(0,-1);
}

function calculate(){

try{

if(display.value==="") return;

let exp=display.value;

let result=eval(exp);

if(!isFinite(result)){

display.value="Error";

return;

}

history.innerHTML=exp+" =";

display.value=result;

}

catch{

display.value="Error";

}

}

document.addEventListener("keydown",e=>{

let k=e.key;

if(!isNaN(k))
appendValue(k);

else if(["+","-","*","/","%","."].includes(k))
appendValue(k);

else if(k==="Enter"){
e.preventDefault();
calculate();
}

else if(k==="Backspace")
deleteLast();

else if(k==="Escape")
clearDisplay();

});

const themeBtn=document.getElementById("themeBtn");

themeBtn.onclick=()=>{

document.body.classList.toggle("dark");

themeBtn.innerHTML=document.body.classList.contains("dark")
?"☀️":"🌙";

};