

function generateView(user)
{   let togglButton = document.querySelector("#toggleButton");
    
    var li = document.createElement('li');
    var button = document.createElement('button');
    var div = document.createElement('div');
    var h5 = document.createElement('h5');
    var p = document.createElement('p');
    p.className="card-text";
    h5.className="card-title";
    div.className="card-body";
    console.log(user.disabled);
    li.className=user.disabled ? 'list-group-item bg-success' : 'card-body bg-secondary';
    button.className=user.disabled ? "btn btn-primary float-right":"card-body bg-secondary";
    h5.innerText='User Nsme: '+user.name;
    p.innerText='user id: '+user.id;
    
    togglButton.onclick =function() {
        toggleStatus(user);
    }

    p.appendChild(button);
    h5.appendChild(p);
    div.appendChild(h5);
    li.appendChild(div);


    return li;



}

function renderData(){
   var taskList= document.querySelector('#taskList');
   taskList.className="list-group";
    let allUsers = fetchAllUsers();

    for (user of allUsers){
        taskList.appendChild(generateView(user));
    }

    
}



function toggleStatus(user){
   
    user.disabled = !user.disabled

    renderData()
    
}
renderData();



if(user.disabled){
    div.className="card-body bg-secondary";
    button.className="btn btn-secondary float-right"; 
    user.disabled=true;
}else{
    div.className="card-body bg-success";
    button.className="btn btn-primary float-right"; 
    user.disabled=false;
}}