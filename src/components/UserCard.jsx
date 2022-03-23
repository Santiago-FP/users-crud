import React from "react";

function UserCard(props){
    const user = props.user;
    const deleteUser = props.deleteUser;
    const editUser = props.editUser;
    return(
        <div className="UserCard">
            <p>{user.first_name} {user.last_name}</p>
            <p>{user.birthday}</p>
            <p>{user.email}</p>
            <button onClick={() =>editUser(user.id)}>Edit</button>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
        
       
        
    )
};


export default UserCard;