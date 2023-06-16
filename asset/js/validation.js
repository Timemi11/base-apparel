let btnsubmit = document.getElementById("submit");
btnsubmit.onclick = () =>{
    let inputEmail = document.getElementById("email");
    let successtext = document.querySelector(".success-message");
    let errortext = document.querySelector(".error-message");
    let erroricon = document.querySelector(".error-icon");
    let regex = /([a-z]\w+\d[@]\w+\.(com|ac.th))/gi;
    

    if(inputEmail.value.trim().match(regex)){
        successtext.style.display = "block";
        inputEmail.style.border = "1px solid #008000";
        errortext.style.display = "none";
        erroricon.style.display = "none";
        inputEmail.value = "";
    }else{
        inputEmail.style.border = "1px solid hsl(0, 93%, 68%)";
        successtext.style.display = "none";
        errortext.style.display = "block";
        erroricon.style.display = "block";
    }
    
}