var screen=document.getElementById('screen');
//1 display number in text box

function btnClick(value){
    screen.value+=value;
}

//2 clear text box

function clearscreen(){
    screen.value="";
}


function findResult(){
    var result=eval(screen.value);
    screen.value=result;
}

function removeItem(){
    currentExpression=screen.value;
    screen.value=currentExpression.slice(0,-1);
}

