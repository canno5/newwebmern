import { createContext, useState } from 'react'
import { ContactCard } from './ContactCard'
export const TitleLog = createContext();
const userDefault = {
    email: "",
    password: ""
}
export const Users = createContext();
export const ButtonSignIn = createContext();
const ChangeEvent = createContext();
export const Login = () => {
    const [user, setUser] = useState(userDefault);
    
    const InputEvent = (e)=>{
        const {value, name} = e.target;
        setUser({...user, [name]:value});
    }
    const loginBtn = (e)=>{
        e.preventDefault();
        alert('User' + user.email + ' '+ user.password)
        // if()
    }
    
    return (
        <TitleLog.Provider value='Login'>
        <Users.Provider value={user}>
        <ChangeEvent.Provider value={InputEvent}>
        <ButtonSignIn.Provider value={loginBtn}>
        <ContactCard title='Login' clscond='login-sec' />
        </ButtonSignIn.Provider>
        </ChangeEvent.Provider>
        </Users.Provider>
        </TitleLog.Provider>
    )
}
