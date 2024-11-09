function validation(){
    const password=document.getElementById('password').value;
    const cpassword=document.getElementById('cpassword').value;
    const error=document.getElementById('error-msg');
    error.textContent='';
    if(password.length<8){
        error.textContent='password is not lenght';
        return false;
    }
    if(password!==cpassword){
        error.textContent='passowrd not match';
        return false;
    }
    alert('sucessful');
    return true;
}