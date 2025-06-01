const result=document.getElementById('result');
function appendValue(value){
    result.value+=value;
}
function clearResult(){
    result.value='';
}
function calculate(){
    try{
        result.value=eval(result.value);
    }
    catch(e){
        alert("Invalid Expression");
        clearResult();
    }
}
document.addEventListener("keydown",function(event){
    const allowedKeys="0123456789.+-*/";
    if(allowedKeys.includes(event.key)){
        result.value+=event.key;
    }
    else if (event.key==="Enter"){
        calculate();
    }
    else if(event.key==="Backspace"){
        result.value=result.value.slice(0,-1);
    }
    else if(event.key==="Escape"){
        clearResult();
    }
});