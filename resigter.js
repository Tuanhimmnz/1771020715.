function kt(){
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    const retypePass = document.getElementById("password_field-retype").value;
    if(email == "" || password == "" || retypePass == ""){
        alert("Chưa điền đủ thông tin");
    }
    else if(!validateEmail(email)){
        alert("Email không đúng định dạng");
    }
    else if(password!= retypePass){
        alert("Mật khẩu và nhập lại không trùng khớp")
    }else{
        if(password.length < 8){
            alert("Mật khẩu phải lớn hơn 8 kí tự");
        }else{
            alert("Đăng ký thành công");
            window.location.href = "login.html";
        }
    }
}
function validateEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}