document.getElementById("submitButton").addEventListener("click",calculate)

function calculate(){
    let statorWidth = document.getElementById("motor_width").value;
    let statorHeight = document.getElementById("motor_height").value;

    if(statorHeight > 0 && statorWidth > 0){
    let volume = statorWidth*statorWidth*(Math.PI)*statorHeight
    document.getElementById("resulttext").innerHTML = "Result : " + Math.round(volume*10)/10;
    }
    else{
        alert("Invalid Input");
    }
}