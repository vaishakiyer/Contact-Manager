class User{
   
    constructor(id,name,password){
     this.id = id;
     this.name = name;
     this.role = 'user'
     this.password = password;
     this.contacts = []
     this.disabled = 'false'
    }
     
}

class Contact  {
    
    constructor(name,phone,email,imageUrl){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.imageUrl = imageUrl
    }
}