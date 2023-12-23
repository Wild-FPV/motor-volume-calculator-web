document.getElementById("submitButton").addEventListener("click",calculate)

document.addEventListener("keydown",(event) =>{
    if(event.key=="Enter"){
        calculate();
    }
});

function calculate(){
    let statorWidth = document.getElementById("motor_width").value;
    let statorHeight = document.getElementById("motor_height").value;

    if(statorHeight > 0 && statorWidth > 0){
    let volume = Math.pow((statorWidth/2),2)*(Math.PI)*statorHeight
    document.getElementById("resulttext").innerHTML = "Result : " + Math.round(volume*10)/10;
    }
    else{
        alert("Invalid Input");
    }
}
