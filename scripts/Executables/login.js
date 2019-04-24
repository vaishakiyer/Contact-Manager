
//identify all the elements


var userEmailId =document.querySelector('#userEmailId');
var userPassword = document.querySelector('#userPasword');
var userLoginButton = document.querySelector('#userLoginButton');
var users = [];

//users = [new User(1,'vaishak','qwerty12'),new User(2,'naveen','helloworld!'),new User(3,'mohan','checked')]

function generateElements(){

}





userLoginButton.onclick = function loginPressed(){

   
   var allUsers = fetchAllUsers();
   let myUser;
   console.log(allUsers);
   allUsers.forEach((element)=>{
       //console.log(element.emailId,userEmailId.value);
       //if(element.emailId===userEmailId.value && element.password===userPassword.value){
         //  myUser=element;
       //}
       //else {
         //  alert("entered user id or password is wrong")
       //}
   })
 


    //validation Login
    //then perform the below actions

    
   allUsers.forEach((element)=> {

      if (element.name == myUser.name){
          
          saveCurrentUser('current',myUser)
      }else{
          alert('user not found!. Please check your credentials.')
      }

   })
  

    
}

function adminLogin(){
   //redirecting to the required page
}

function idGenerator(){
    if  (users[users.length - 1].id === null){
        return 1;
    }else{
        let count = users[users.length - 1].id
        return count++;
    }
   
}


