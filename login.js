function kt(){
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    if(email == "" || password == ""){
        alert("Không được để trống dữ liệu");
    }
    else if(email == "admin@gmail.com" && password == "123"){
        alert("Đăng nhập thành công");
        localStorage.setItem('loggedIn', 'true');
        window.location.href = "index.html";
    }else{
        if(email == "admin@gmail.com" && password != "123"){
            alert("Sai mật khẩu");
            document.getElementById("email_field").value = '';
            document.getElementById("password_field").value = '';
        }else if(email != "admin@gmail.com" && password == "123"){
            document.getElementById("email_field").value = '';
            document.getElementById("password_field").value = '';
            alert("Sai email");
        }else{
            alert("Thông tin nhập vào sai");
            document.getElementById("email_field").value = '';
            document.getElementById("password_field").value = '';
        }
    }
}