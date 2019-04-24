
var addedContacts = []

function generateElements(user){

}

function reloadView(user){
        
    generateElements(user)
}



function addContacts(){
    var allUsers = fetchAllUsers();
   let myContact = new Contact('vaishak','9898505884','vaishak94@gmail.com','')
    addedContacts.push(myContact)
   let currentUser = loggedInUser();
   currentUser.contacts = addContacts

   allUsers.forEach(element => {
       
    if (element.name = currentUser.name){
         appendDataToLocalStorageKey('users',currentUser,false)
         break;
    }
            
   });
   
   reloadView(fetchAllUsers())
}

function removeContact(index){

    let currentUser = loggedInUser();
    
    currentUser.contacts.splice(index,1);
    appendDataToLocalStorageKey('users',currentUser,true);
    

    reloadView(fetchAllUsers())

}