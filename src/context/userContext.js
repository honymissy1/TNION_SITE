import {createContext, useEffect, useState} from 'react';


const UserContext = createContext();


const UserProvider = ({children}) =>{
   const [user, setUser] = useState({
    username:'',
    email:''
   }); 
    
     useEffect(() =>{
      const local = JSON.parse(localStorage.getItem('user'));
      if(local){ setUser(local) }else{
         localStorage.setItem('user', JSON.stringify(user));
      }
     }, [])    

    const userLogin = async (name, email) =>{
        setUser({...user, email: email, username: name});
        localStorage.setItem('user', JSON.stringify({...user, email: email, username: name}));
        console.log('Changed name');
    } 

    const userLogout = async () =>{
        localStorage.removeItem('user')
        console.log('Logged Out');
    } 

    return(
        <UserContext.Provider value={{user, userLogin, userLogout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserProvider}
export default UserContext;