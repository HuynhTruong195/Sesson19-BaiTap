// Create-Read-Update-Delete
//dữ liệu về các đầu việc sẽ được chỉnh sửa và lưu trữ lại vào trong Local Storage

// CÁC BƯỚC
//gọi giá trị từ các input bên html qua js bằng document.getelement
//gán giá trị cho nút submit bằng submit, chặn mặc địh gửi bằng event
//Creat -- lấy thông tin từ các ô input như content,date,status,username
//tạo mảng chưa thông tin ng dùng sa đó push vào form
// sau khi nhấn submit sẽ đẩy thông tin vào bảng bên dưới

const btn = document.getElementById('btn');
let users = [];
let id = 0;
btn.addEventListener('click', function (event) {
    event.preventDefault();

    //.options[...]	Truy cập từng option bên trong dropdown
    let statusElement = document.getElementById('select');
    let statusText = statusElement.options[statusElement.selectedIndex].text;

    //check input bỏ trống 
    let check = document.querySelectorAll('.input');
    let isEmpty = false;
    check.forEach(input => {
        if (input.value.trim() === "") {
            isEmpty = true;
        }
    });
    if (isEmpty) {
        alert('Nhập đủ thông tin');
        return;
    }


    //check status bỏ trống
    let statusEl = statusElement.value;
    if (statusEl === "") {
        alert('Vui lòng chọn status!');
        return;
    }

    let user =
    {
        id: id+=1,
        Content: document.getElementById('content').value,
        Duedate: document.getElementById('date').value,
        Status: statusText,
        Assignedto: document.getElementById('username').value,
    };
    users.push(user);
    render(users);

    localStorage.setItem('users', JSON.stringify(users));

});


//tạo funciton render danh sách,
//tạo chuỗi "" , quét qua users r += giá trị mới
//gán giá trị mới đó vào innerhtml của tbody

function render() {
    str = "";
    let id = 1;
    for (let i = 0; i < users.length; i++) {
        str +=
            `
        <tr>
                <td>${id++}</td>
                <td>${users[i].Content}</td>
                <td>${users[i].Duedate}</td>
                <td>${users[i].Status}</td>
                <td>${users[i].Assignedto}</td>
                <td>
                    <button onclick=edit(${i})>Sửa</button>
                    <button onclick=deleteValue(${i})>Xóa</button>
                </td>
            </tr>
           `
    }
    document.getElementById('tbody').innerHTML = str;
}

//function delete

function deleteValue(index) {
    users.splice(index, 1);
    render();
}

//function edit
function edit(index) {

    if(
        users[index].Content && users[index].Duedate && users[index].Status && users[index].Assignedto){
 //không phải là element nên k có text
 users[index].Content = prompt('Nhập Content mới',users[index].Content);
 users[index].Duedate = prompt('Nhập Due date mới', users[index].Duedate); 
 users[index].Status = prompt('Nhập Status mới', users[index].Status);
 users[index].Assignedto = prompt('Nhập Username mới', users[index].Assignedto);
 
       
    }else if ((users[index].Content || users[index].Duedate || users[index].Status || users[index].Assignedto )=== ""){

    } {
        alert('Nhập Đủ Thông Tin');
        
    }
    localStorage.setItem('users', JSON.stringify(users));
    render();
}
function dlt(index) {
    //button -> td -> tr
    //set owr button onclick="dlt(this)", sau đó tìm đến phần tử cha (<tr>) và dùng .remove() để xóa.
    let dltInput = index.parentElement.parentElement;
    dltInput.remove();
    }

function editDefault(button){
    let row = button.parentElement.parentElement;
    let contentCell = row.cells[1];
    let dateCell = row.cells[2];
    let statusCell = row.cells[3];
    let nameCell = row.cells[4];

    let newContent = prompt('Nhập Content mới',contentCell.innerText);//gọi lại text để gợi ý
    let newDate = prompt('Chọn date mới', dateCell.innerText);
    let newStatus = prompt('Nhập Status mới', statusCell.innerText);
    let newName = prompt('Nhập Username mới', nameCell.innerText); 
    
if(newContent && newDate && newStatus &&newName){
   contentCell.innerText = newContent;
   dateCell.innerText = newDate;
   statusCell.innerText = newStatus;
   nameCell.innerText = newName;
}else{
    alert('Không Để Trống!')
}

}