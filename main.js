function functionSub() {
    if (fLNameFunc () , ageAbove18() , validEmailInput () , validPhoneFunc() , validPasswerdFunc () ) {
        return true;
    }
    return false;
}


var regex = /^[a-zA-Z]+$/;

function fLNameFunc () {
    regex = /^[a-zA-Z]+$/;
if(regex.test(fName_input.value) && regex.test(lName_input.value)){
    return true;
}
first_label.innerHTML += "*<span>first name <b>MUST</b> be only in english:</span>";
first_label.style.color = "red";
last_label.innerHTML += "*<span>last name <b>MUST</b> be only in english:</span>";
last_label.style.color = "red"
return false;
}

function ageAbove18() {
    var maxDayDath = (new Date().getFullYear())-(input_Date.value.substr(0,4));
      if(maxDayDath>18){
        return true;
      }
      
      date_label.innerHTML += "*<span>Date of birth <b>must</b> be above18:</span>";
      date_label.style.color = "red"
      return false;
}

function validEmailInput (){
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(input_email.value)) {
        return true;
    }
    email_label.innerHTML += "*<span>Enter A valid Email:</span>";
    email_label.style.color = "red"
    return false;

}

function validPhoneFunc () {
    var regexPhone = /^[050]\d+$/;
    if (regexPhone.test(phone_input.value)) {
        return true;
    }
    phone_label.innerHTML += "*<span>phone number <b>must</b> strat in 050 :</span>";
    phone_label.style.color = "red"
    return false;

}
var passD = passwerd1.value;
function validPasswerdFunc () {
    var regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,12})/;
    if ((regexPass.test(passwerd1.value))&&(passwerd1.value==passwerd2.value) && (passwerd1.value.toUpperCase([0])) && passwerd1.value.toLowerCase([1])) { 
        return true;
    }
        pas_class1.innerHTML += "*<span>passwerd not storng enough:</span>";
        pas_class2.innerHTML += "*<span>Passwerd are not match:</span>";
        pas_class1.style.color = "red"
        pas_class2.style.color = "red"
        return false;
        
    }

