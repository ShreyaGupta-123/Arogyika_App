class User{
    constructor(){
        this.name=null
        
    }

    update(name){
        var userIndex="users/user"
        database.ref(userIndex).set({
            name:this.name,
            
        })
        }

  
}