 function requestAccess() {
    var  email = document.getElementById("email");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.value == ""){
        alert('Oops! Please add your email');
        return;
    }else if (email.value.match(mailformat)){
        alert('Successfully accessed');
    }else {
        alert("Oops! Please check your email")
    }  
}
