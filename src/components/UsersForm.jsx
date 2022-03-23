import React from "react";
import { useState,useEffect } from "react";



function UsersForm(props){
    const createUser = props.createUser;
    const userData = props.userData;

    // states que tienen los datos del nuevo usuario
    const [name,setName] =useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const [birthday,setBirthday] = useState("");
    
    useEffect(
        () => {
            if(userData!== undefined){
                setName(userData?.first_name);
                setLastName(userData?.last_name);
                setEmail(userData?.email);
                setPassword(userData?.password);
                setBirthday(userData?.birthday);
            }else{
                setName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setBirthday("");
            }
        },[userData]
    )
   
    function handleSubmit(e){
        if (userData=== undefined){
            e.preventDefault();
        const newUser = {
            email:`${email}`,
            password: `${password}`,
            first_name: `${name}`,
            last_name: `${lastName}`,
            birthday: `${birthday}`
        };
        createUser(newUser)
        
        }else{
            e.preventDefault();
        const newUser = {
            email:`${email}`,
            password: `${password}`,
            first_name: `${name}`,
            last_name: `${lastName}`,
            birthday: `${birthday}`
        };
        createUser(newUser,userData.id)

        }
        
        };

    
        return(
        
            <>
            <form className="UsersForm"> 
                <input type="text" placeholder="First Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}></input>
    
                {userData !== undefined ? <button onClick={handleSubmit}>Edit User</button> : <button onClick={handleSubmit}>Create User</button> }
                
                </form>
            </>
                
            
            
        )

    
};

export default UsersForm;