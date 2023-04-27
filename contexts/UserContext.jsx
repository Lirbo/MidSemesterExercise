import React from 'react'
import { createContext, useState, useEffect } from 'react';
import UsersJSON from '../data/users.json';

export const UserContext = createContext();

export default function UserContextProvider({children}) {

    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState();

    async function loadUsers(){
        try{
            setUsers(UsersJSON);
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() =>{
        loadUsers();
    }, []);

    function authenticateUser(username, password){
        let user = users.find((u)=>u.username == username && u.password == password);
        if(user){
            setCurrentUser(user);
            return user;
        }
        else{
          alert("Username or password is incorrect!");
          return null;
        }
      }

    const value = {
        users,
        setUsers,
        authenticateUser,
        currentUser
    };

  return (
    <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
  )
}
