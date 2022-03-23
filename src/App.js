import React from 'react'
import './App.css';
import axios from 'axios';
import { useState,useEffect } from 'react';
import UsersList from './components/UsersList';
import UsersForm from './components/UsersForm';


function App() {
  //state que contiene los usuarios actuales
const [users,setUsers] = useState([]);

// la info del usuario que editaremos
const [userData,setUserData] = useState(undefined);
useEffect(getUsers,[] );
//Obtenemos los usuarios de la Api
function getUsers() {
  axios.get("https://users-crud1.herokuapp.com/users/")
  .then(res => setUsers(res.data))
};
//creamos un nuevo usuario
function createUser( user,id){
  if(id){
    console.log("User Updated")
    axios.put(`https://users-crud1.herokuapp.com/users/${id}/`,user)
    .then(getUsers)
    .then(setUserData(undefined));
  }else{
    console.log("User Created ");
  axios.post("https://users-crud1.herokuapp.com/users/",user)
  .then(getUsers)
  .then(setUserData(undefined));
  }
  
  
};
// borrramos un usuario con su id
function deleteUser(id){
  axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
  .then(getUsers);
};
//Editar usuario existente
function editUser(id){
  
  axios.get(`https://users-crud1.herokuapp.com/users/${id}`)
  .then((res) => {
    setUserData(res.data);
    
  })
};


  return (
    <div className="App">
      <header className="App-header">
        <h1>Users CRUD</h1>
        <UsersForm  createUser={createUser}  userData={userData}/>
      </header>
      <UsersList users={users} deleteUser={deleteUser} editUser={editUser}/>
    </div>
  );
}

export default App;
