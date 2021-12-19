function validFname(){
    let first_name=document.getElementById('firstname').value

    if(first_name==""){
        displayMsg('firstname is required','fnamemsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('first name must be greater then 2 characters','fnamemsg','red')
        return false

    }

    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname only contains alphabets','fnamemsg','red')
        return false
    }


    else{
        displayMsg('valid firstname','fnamemsg','green')
        return true
    }
}

function displayMsg(message,id,colorValue){
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorValue
}


function validLname(){
    let last_name=document.getElementById('lastname').value

    if(last_name==""){
        displayMsg('last name is required','lnamemsg','red')
        return false
    }

        else if(last_name.length<3){
            displayMsg('last name must be greater then 2','lnamemsg','red')
            return false
       
    }

    
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('laststname only contains alphabets','lnamemsg','red')
        return false
    }

    else{
        displayMsg('valid last name','lnamemsg','green')
        return true
    }
}
function displayMsg(message,id,colorValue){
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorValue
}

function validEmail(){
    let email=document.getElementById('email').value

    if(email==""){
        displayMsg('Email is Required','emailmsg','red')
        return false
    }

    else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.]+\@+(([a-z])+\.)+([a-z])/)){
        displayMsg('invalid email format','emailmsg','red')
        return false
    }

    else{
        displayMsg('valid email','emailmsg','green')
        return true
    }
}

function displayMsg(message,id,colorValue){
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorValue
}

function validPassword(){
    let password=document.getElementById('password').value

    if(password==""){
        displayMsg('please Enter The Valid Contact','passwordmsg','red')
        return false
    }

    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%?!]).{8,50}$/)){
        displayMsg('password format should be like A@stsysys and minimum of 8 characters','passwordmsg','red')
        return false
    }


    else{
        displayMsg('valid password','passwordmsg','green')
        return true
    }
}

function displayMsg(message,id,colorValue){
    document.getElementById(id).innerHTML=message
    document.getElementById(id).style.color=colorValue
}


function validForm(){
    if(validFname() && validLname() && validEmail() && validPassword()){
        return true
    }
    else{
        return false
    }
}