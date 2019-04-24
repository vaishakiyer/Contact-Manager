var newEmailAdress=document.querySelector('#newEmailAdress');
var newPassword = document.querySelector('#newPassword');
var confirmNewPassword = document.querySelector('#confirmNewPassword');
var signUpButton = document.querySelector('#signUpButton');
var newName=document.querySelector('#newName');
//var users = [];

signUpButton.onclick = function registerUser(){
    
    if(newPassword.value!==confirmNewPassword.value || newPassword.value===null){
        alert('Password confirmation failed');
    }else if(newEmailAdress.value===''||newName.value===''){
        alert("fill all the fields");
    }
    
    else{
        console.log(idGenerator());
    let myUser =  new User(idGenerator(),newName.value,newEmailAdress.value,newPassword.value)
    appendDataToLocalStorageKey('users',myUser,false) 
}
}
function idGenerator(){
  let users = fetchAllUsers();
    console.log(users);
    if (users === null){
        return 1;
    }else{
        let count = users[users.length - 1].id;
        return ++count;
    }
   
}