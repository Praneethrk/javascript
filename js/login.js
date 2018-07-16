function validate(){
    nameEle=document.getElementById("uname");
    pwdEle=document.getElementById("upwd");
    
    name=nameEle.value;
    pwd=pwdEle.value;
    
    if(name.trim() === ""){
        document.getElementById("errorname").innerHTML="User Name cant be empty";
        nameEle.style.border="1px solid red";
        return false;
    }
    if(pwd.trim() === ""){
        document.getElementById("errorpwd").innerHTML="User password cant be empty";
        pwdEle.style.border="1px solid red";
        return false;
    }
}