

function generateView(user)
{

}

function renderData(user){
   

    generateView(user)
}



function toggleStatus(user){
   
    user.disabled = !user.disabled
    renderData(user)
    
}