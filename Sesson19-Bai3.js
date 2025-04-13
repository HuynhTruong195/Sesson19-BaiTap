// Biểu mẫu đăng nhập gồm có: Email, Password.
// Kiểm tra sự hợp lệ thông tin người dùng nhập vào: Email không được bỏ trống, Email & Password trùng khớp.
// Có nút mắt xem để xem lại mật khẩu dưới dạng Text.
// Chuyển trang chủ sau khi đăng nhập thành công.

const form = document.getElementById('form');
let users = JSON.parse(localStorage.getItem("users")) || [];

//ẩn hiện pass
let icon = document.getElementById('icon');
icon.addEventListener('click', function () {
    let pass = document.getElementById('password');
    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
    // pass.type = (pass.type === "password"? "text":"password");

});


//tiến hành login
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let passWord = document.getElementById('password').value;



    //lấy giá trị từ local về so sánh
    let isLogin = users.some(function (user) {
        return user.email === email && user.password === passWord;
    });
    if (isLogin) {
        alert('Login Thành Công');
        //điều hướng khi login thành công
        window.location.href = "https://rikkei.edu.vn/"
    } else {
        alert('Email hoặc Mật Khẩu Không Đúng!!!')
    };



});

//check email tồn tại chưa
function checkEmail(emailtoCheck) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailtoCheck) {
            return true;
        }
    }
    return false;
}


//signup
let textConfirm = document.getElementById('textConfirm');
let btnLogin = document.getElementById('btn');
let signup_btn = document.getElementById('signup');
let cfPass = document.getElementById('confirmPassword');
signup_btn.addEventListener('click', function () {
    if (signup_btn.classList.toggle('none')) {
        cfPass.style.display = 'block';
        textConfirm.style.display = 'block';
        signup_btn.innerText = 'Hide';
        btnLogin.innerText = 'Register';

    } else {
        cfPass.style.display = 'none';
        textConfirm.style.display = 'none';
        signup_btn.innerText = 'SignUp';
        btnLogin.innerText = 'Login';
    }

})


