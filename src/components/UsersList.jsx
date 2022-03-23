import React from "react";
import UserCard from "./UserCard";
function UsersList(props){
    const users = props.users;
    const deleteUser = props.deleteUser;
    const editUser = props.editUser;
    return(
        <div className="UsersList">
            {users.map(user => {
            return(
                <UserCard user={user} key={user.id} deleteUser={deleteUser} editUser={editUser}/>
            )
        })}
        </div>
        
    
        
        
    )
};

export default UsersList;