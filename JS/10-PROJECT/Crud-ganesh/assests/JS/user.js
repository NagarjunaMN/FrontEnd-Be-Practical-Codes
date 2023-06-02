let myForm = document.getElementById('myForm');
let fUser = document.getElementById('user');
let fEmail = document.getElementById('email');
let result = document.getElementById("result");

let isEdit = false; //controls the create and update ,create ->false update->true
let editId = 0;

//local storage var-> read
let users = JSON.parse(localStorage.getItem("users")) || [];

//generate random id

const getRandomId = () => {
    return Math.floor(Math.random() * 10000);
}

//submit method
myForm.addEventListener("submit", function (event) {
    event.preventDefault(); //avoid page refresh
    let data = {
        id : getRandomId(),
        user: fUser.value,
        email : fEmail.value
    };

    // console.log("new user =" ,data);
    if (isEdit == false) {
        createUser(data);    
    }else{
        let newData = {
            id : editId,
            user : fUser.value,
            email : fEmail.value
        }
        updateUser(newData, editId)
    }
});

//create new data in local storage
function createUser(newUser) {
    let extUser = users.find((item) => item.email === newUser.email)
    if(extUser) {
        alert("Email already registered")
    }else{
        users.push(newUser);
        saveData(users);
        print();
        alert("New user created successfully");
        window.location.reload();
    }
}

function saveData(data) {
    //store the data
    localStorage.setItem("users",JSON.stringify(data));
}

//print the data
function print() {
    if(users.length ===0){
        result.innerHTML = `<tr>
            <td colspan ="4">
                No Users data found
            </td>
        </tr>`
    }else{
    users.forEach((item,index) => {
        result.innerHTML += `<tr>
        <td>${item.id}</td>
        <td>${item.user}</td>
        <td>${item.email}</td>
        <td>
            <button onclick = "edit(${item.id})" class = "btn btn-success">Edit</button>
            <button onclick = "deleteUser(${item.id})" class = "btn btn-warning">Delete</button>
        </td>
        </tr>`;
    });
}
}

function deleteUser(id) {
    if (window.confirm(`Do you want to delete id = ${id}`)) {
        console.log("delete if = ",id);
            let extuser = users.find((item) => item.id == id)
            users.splice(extId,1);
            saveData(users);
            alert("User Updated successfully");
            window.location.reload();
    }
}

function clearStorage() {
    if(confirm("Do you want to delete all user data?")){
        localStorage.clear();
        alert("All users data deleted");
        window.location.reload();
    }
}

// self constructor to call print on page reload
(function () {
    print()
})();


//read the data before edit
function edit(id) {
    console.log("id =",id);
    isEdit = true;
    editId = id;
    console.log("isedit = ",isEdit);
    if(isEdit){
        let extuser = users.find((item) => item.id == id)
        console.log("Edit user data",extuser)
        fUser.value = extuser.user;
        fEmail.value = extuser.email;
    }
}

//update the data
function updateUser(data, id) {
    console.log("update data =",data);
    console.log("update id =",id);
    let extId = users.findIndex(item => item.id == id);
        users.splice(extId,1,data);
        saveData(users);
        alert("User Updated successfully");
        window.location.reload();
}