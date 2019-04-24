
//identify all the elements


var userEmailId =document.querySelector('#userEmailId');
var userPassword = document.querySelector('#userPassword');
var userLoginButton = document.querySelector('#userLoginButton');
var adminPassword = document.querySelector('#adminPassword');
var adminLoginButton =document.querySelector("#adminLoginButton");

var users = [];

//users = [new User(1,'vaishak','qwerty12'),new User(2,'naveen','helloworld!'),new User(3,'mohan','checked')]

function generateElements(){

}





userLoginButton.onclick = function loginPressed(){

    //console.log(allUsers);
   var allUsers = fetchAllUsers() ;
   let myUser;
    
   allUsers.forEach((element)=>{
       
       if(element.email===userEmailId.value && element.password===userPassword.value){
           myUser=element;
           saveCurrentUser('current',myUser)
          
       }
       else {
           alert("entered user id or password is wrong")
       }
  })
 


    //validation Login
    //then perform the below actions

    
//    allUsers.forEach((element)=> {
//        if (element.name == myUser.name){
          
//            saveCurrentUser('current',myUser)
//        }else{
//            alert('user not found!. Please check your credentials.')
//        }

//     })
  

    
}

adminLoginButton.onclick= function adminLogin(){
    console.log(adminPassword.value);
   if(adminPassword.value==="admin"){
    window.location.href = '../../Contact-Manager/html/admin.html';
   }
}




