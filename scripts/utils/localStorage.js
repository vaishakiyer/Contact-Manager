function appendDataToLocalStorageKey(key,value,remove){
   
    var arr = JSON.parse(localStorage.getItem(key));
    if (arr === null){
        arr = [value]
    }else{

        if (remove == false){

            for (i in arr){
                if (arr[i].name === value.name){
                     arr[i].contacts = value.contacts
                     break;
                }else{
                    arr.push(value);
                    break;           
                 }
            }

        }else{
             
              for (i in arr){
                  if (arr[i].name === value.name){
                        arr.splice(i,1);
                        break;
                  }
              }
              
        }
        
      
    }

    localStorage.setItem(key,JSON.stringify(arr));
}

function saveCurrentUser(key,value){
  
    localStorage.setItem(key,JSON.stringify(value));

}

function fetchAllUsers(){
   
    var users = JSON.parse(localStorage.getItem('users'));
    return users

}

function loggedInUser(){
    var currentUser = JSON.parse(localStorage.getItem('current'));
    return currentUser
}