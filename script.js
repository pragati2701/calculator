const btnsEle=document.querySelectorAll("button");
const inputEle = document.getElementById("result");

for(let i = 0; i< btnsEle.length ; i++){
    btnsEle[i].addEventListener("click", ()=>{
       const btnValue =  btnsEle[i].textContent
       if(btnValue === "C"){
        clearRes()
       }
       else if(btnValue === "="){
        calculateRes()
       }
       else{
        appendValue(btnValue)
       }
    })
}



function clearRes(){
    inputEle.value="";
}

function calculateRes(){
    inputEle.value = eval(inputEle.value )
}

function appendValue(btnValue){
    inputEle.value += btnValue
}