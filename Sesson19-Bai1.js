//Nhập Email, pass và confirm pass
//Kiểm tra tính hợp lệ của input vào và log ra kiểm tra
// kiểm tra xem đã tồn tại email chưa
//lưu tài khoản vào localStorage

const form = document.getElementById('form');
let users = JSON.parse(localStorage.getItem("users")) || [];

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let passWord = document.getElementById('password').value;
    let cfPassword = document.getElementById('confirmPassword').value;



    if (passWord !== cfPassword) {
        alert('Mật Khẩu Không Khớp!');
        return;
    }
    if (!email || !passWord || !cfPassword) {
        alert('Vui Lòng Không Bỏ Trống');
        return;
    }
    // Kiểm tra email đã tồn tại
    //gọi hàm check
    if (checkEmail(email)) {
        alert('Email đã tồn tại!');
        return;
    }
    // Tạo user mới và lưu vào mảng
    let newUser = {
        id: Math.floor(Math.random() * 10000),
        email: email,
        password: passWord,
    };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));
    alert('đăng ký thành công')
    // console.log(typeof users);
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
