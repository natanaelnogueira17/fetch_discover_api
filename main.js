
const url = "http://localhost:5501/api"


// rota para todos users
function getUsers(){
    fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.log(error))
}

//rota para userId
function getUser(){
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.log(error))
}

//rota para insertuser
function adduser(newUser){
    fetch(url, {
        method:"POST",
        body: JSON.stringify(newUser),
        headers:{
            "Content-type": "application/json;charset=UTF-8"           
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data )
    .catch(error => console.log(error))
}
// rota para update user
function updateUser(updateId, id){
    fetch(`${url}/${id}`, {
        method:"PUT",
        body: JSON.stringify(updateId),
        headers:{
            "Content-type": "application/json;charset=UTF-8"    
    }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.log(error))

}


// rota para delete
function deleteUser(id){
    fetch(`${url}/${id}`, {
        method:"DELETE",        
        headers:{
            "Content-type": "application/json;charset=UTF-8" 
        }
    })
    .then(response => response.json())
    .then(data => alertAPI.textContent = data)
    .catch(error => console.log(error))
}


//constantes
const newUser ={
    name: "olivia Zars",
    avatar: "http://picsum.photos/200/300",
    city:"Rio Grande do Sul"

}
const updateId ={
    name: "maykBrito",
    avatar: "http://picsum.photos/200/300",
    city:"Fortaleza-CE"

}

//chamando a rota pra insert into  user
//adduser(newUser)

//chamando a rota para select * from user where id =?
getUser()

//chamando a rota para select * from user
getUsers()

//chamando a rota update table user
//updateUser(updateId, 9)

// chamando a rota delete user
deleteUser(8)