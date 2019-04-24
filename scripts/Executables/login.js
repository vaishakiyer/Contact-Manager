
//identify all the elements

var users = [];

users = [new User(1,'vaishak','qwerty12'),new User(2,'naveen','helloworld!'),new User(3,'mohan','checked')]

function generateElements(){

}

function registerUser(){

    let myUser =  new User(idGenerator,'vaishak','qwerty12')
    appendDataToLocalStorageKey('users',myUser,false) 
}

function loginPressed(){

   
   var allUsers = fetchAllUsers();
   let myUser =  new User(idGenerator,'vaishak','qwerty12')


    //validation Login
    //then perform the below actions

    
   allUsers.forEach((element)=> {

      if (element.name == myUser.name){
          //login
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


