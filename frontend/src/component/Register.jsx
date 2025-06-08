import { createContext, useState } from 'react'
import { ContactCard } from './ContactCard'
import validatePassword from './password';
import { toast } from 'react-toastify';
import { ErrMsgBox } from './ErrMsgBox';
export const Title = createContext();
export const BtnRegister = createContext();
export const ChangeEvent = createContext();
export const User = createContext();
const userForm = {
    name: "",
    phone: "",
    email: "",
    password: "",
    cpassword: "",
    gender: ""
};
export const Register = () => {
    const [user, setUser] = useState(userForm);
    const InputEvent = (e) => {
        const { value, name } = e.target;
        setUser({ ...user, [name]: value })
    }
    const dataSub = async (e) => {
        try {
            e.preventDefault();
            if (!user.name || !user.phone || !user.email || !user.password || !user.cpassword) {
                toast.warn('Please fiil in input filed properly', {
                    position: "top-right",
                    autoClose: 5000
                });
                // document.querySelector('.msg-box').classList.add('d-block')
                // document.querySelector('.msg-box').classList.add('msg-show');
                document.querySelector('.msg-box').classList.add('msg-show')

                document.getElementById('msg-err').textContent = 'Please fiil in input filed properly';
                return;
            };
            const res = await fetch("api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: user.name,
                    phone: user.phone,
                    email: user.email,
                    password: user.password,
                    cpassword: user.cpassword,
                    gender: user.gender,
                })
            });
            const data = await res.json();
            if (res.status === 422) {
                toast.error(data.msg, {
                    position: "top-right",
                    autoClose: 5000
                });
            }
            
            var filter = /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/;
            if (filter.test(user.phone)) {
                const password = user.password;
                const isValid = validatePassword(password);
                if (isValid) {
                    if (res.status === 201) {
                        toast.success(data.msg, {
                            position: "top-right",
                            autoClose: 5000
                        });
                        setUser(userForm);
                    }
                }
                if (data.msg.password != null) {
                    toast.error(data.msg.password.message, {
                        position: "top-right",
                        autoClose: 5000
                    });
                }
            }
            if (data.msg.phone != null) {
                toast.error(data.msg.phone.message, {
                    position: "top-right",
                    autoClose: 5000
                });
            }
        } catch (err) {
            console.log('The Err ' + err);
        }
    }
    return (
        <Title.Provider value='Register'>
            <BtnRegister.Provider value={dataSub}>
                <ChangeEvent.Provider value={InputEvent}>
                    <User.Provider value={user}>
                        <ContactCard title='Registeraction Now' clscond='register-sec' />
                    </User.Provider>
                </ChangeEvent.Provider>
            </BtnRegister.Provider>
            <ErrMsgBox err='hello' />

        </Title.Provider>
        // <div className="register-sec">
        //     <div className="container">
        //         <h1 className='py-5 text-center'>Contact US</h1>
        //         <div className="row">
        //             <div className="col">
        //                 <ContactInfo />
        //             </div>
        //             <div className="col">
        //                 <ContactForm />
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
