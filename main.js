function functionSub() {
    if (fLNameFunc () , ageAbove18() , validEmailInput () , validPhoneFunc()) {
        return true;
    }
    return false;
}


var regex = /^[a-zA-Z]+$/;

function fLNameFunc () {
    regex = /^[a-zA-Z]+$/;
if(regex.test(fName_input.value) && regex.test(lName_input.value)){
    alert("valid name")
    return true;
}
alert("try again")
return false;
}

function ageAbove18() {
    var maxDayDath = (new Date().getFullYear())-(input_Date.value.substr(0,4));
      if(maxDayDath>18){
          alert("get in")
        return true;
      }
      alert("go home")
      return false;
}

function validEmailInput (){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(input_email.value)) {
        alert("corect")
        return true;
    }
    alert("wrong")
    return false;

}

function validPhoneFunc () {
    var regexPhone = /^[050]\d+$/;
    if (regexPhone.test(phone_input.value)) {
        alert("goodPhone")
        return true;
    }
    alert("badPhone")
    return false;

}

function validPasswerdFunc () {
    if (passwerd1.value==passwerd2.value) {
        passwerd1.toUpperCase(0)
        return true;
    }
   
    return false;
        
    }

