var addedContacts = []
var id = document.querySelector('#idField');
var name = document.querySelector('#nameField');
var phoneNumber = document.querySelector('#phoneField');
var imageURL = document.querySelector('#descField');
var addContactBtn = document.querySelector('#addcontact');
var deleteContactBtn = document.querySelector('#deleteContact');
var searchBox = document.querySelector('#searchBox');
var taskList = document.querySelector('#taskList');

 

function generateElements(contact){
  
    var li = document.createElement('li');   
    var image = document.createElement('img');
    var div1 = document.createElement('div');
    var div2 = document.createElement('div');
    var div3 = document.createElement('div');
    var div4 = document.createElement('div');
    var img = document.createElement('img');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var button = document.createElement('button');


    div1.className = 'row card-body';
    div2.className = 'col';
    div3.className = 'col m-2';
    div4.className = 'deleteContact';
    button.className = 'btn btn-light float-right';
    img.className = 'img-thumbnail';


    div1.appendChild(div2);
    div1.appendChild(div3);
    div1.appendChild(div4);
    div2.appendChild(img);
    div3.appendChild(p1);
    div3.appendChild(p2);
    div3.appendChild(p3);
    div4.appendChild(button);
    li.appendChild(div1)

    id.innerText = contact.email
    name.innerText = contact.name
    phNumber.innerText = contact.phone
    image.setAttribute('src',contact.imageURL)
    
    return li

}

function reloadView(users){
        
    taskList.innerHTML = ''
    let assignedUser;
    users.forEach((element) => {
           
        if (element.email == currentUser.email){
               assignedUser = element
        }
    })
    
    for (contact of assignedUser.contacts){
     taskList.appendChild(generateElements(contact));
    }
    
}



addContactBtn.onclick = function addContacts(){
    var allUsers = fetchAllUsers();
   let myContact = new Contact(name.value,phoneNumber.value,id.value,imageURL.value)
    addedContacts.push(myContact)
   let currentUser = loggedInUser();
   currentUser.contacts = addContacts
   saveCurrentUser('current',currentUser)
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


reloadView(fetchAllUsers())