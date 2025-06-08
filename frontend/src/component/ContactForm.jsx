import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { BtnRegister, btnSub, ChangeEvent, Title, User } from './Register';
import { TitleLog, Users } from './Login';
import { BtnSubmit, ChangeInpEvent, ContactVal, TitleCon } from './Contact';
import validatePassword from './password';
import InputArr from './arrray/inputarr';
import Button from './Button';
// const userForm = {
//     name: "",
//     phone: "",
//     email: "",
//     password: "",
//     cpassword: "",
//     gender: ""
// };
// const user = {
//     email: "",
//     password: ""
// };
export const ContactForm = ({ cond }) => {
    // const [msg, setMsg] = useState({ name: "Error", phone: "Error", email: "Error", password: "Error" });
    // const [userExit, setUserExit] = useState(user);
    // const [title, setTitle] = useState('');
    const register = useContext(Title);
    // console.log(register);
    const login = useContext(TitleLog);
    const contact = useContext(TitleCon);
    const btnSub = useContext(BtnRegister);
    const changeEvent = useContext(ChangeEvent);
    const changeEventEmail = useContext(ChangeInpEvent);
    const user = useContext(User);
    const userTwo = useContext(Users);
    const contactDfault = useContext(ContactVal);
    const btnSubmit = useContext(BtnSubmit);



    //useEffect(() => {
    //             switch (cond) {
    //                 case 'register-sec':
    //                     <Button title={register} btnSub={btnSub} />
    //                     // setTitle(register)
    //                     break;
    //                 case 'login-sec':
    //                     <Button title={login} />
    //                     break;
    //                 case 'contact-sec':
    //                     <Button title={contact} />
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         }, [cond])
    // console.log(register);
    // return cond === 'register-sec' ? setTitle(register) : null;
    // const conTit = useContext(TitleCon)

    // cond == 'login-sec' ? setTitle('Login') : null
    //    if(cond === 'register-sec'){
    //        const title = useContext(Title);
    //        setTitle(title);
    //    }
    //    console.log(cond);
    //    if(cond === 'login-sec'){
    //        const title = useContext(TitleLog);
    //        setTitle(title);

    //    }
    //    if(cond === 'contact-sec'){
    //        const title = useContext(Title);
    //        setTitle(title);
    //    }

    // {/* {cond === 'register-sec' ?
    // <Button title={register} btnSub={btnSub} /> : cond === 'login-sec' ?
    //     <Button title={login} btnSub={btnSub} : null 
    // } */}
    // {/* {useEffect(() => {
    //     switch (cond) {
    //         case 'register-sec':
    //             <Button title={register} btnSub={btnSub} />
    //             // setTitle(register)
    //             break;
    //         case 'login-sec':
    //             <Button title={login} />
    //             break;
    //         case 'contact-sec':
    //             <Button title={contact} />
    //             break;
    //         default:
    //             break;
    //     }
    // }, [cond])} */}

    return (
        <form method='POST'>
            {cond === 'register-sec' || cond === 'contact-sec' ? <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                {cond === "register-sec" ?   <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" name='name' onChange={changeEvent} value={user.name} required autoComplete='off' /> :                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="User Name" name='name' onChange={changeEvent} value={contactDfault.name} required autoComplete='off' />}
 
            </div> : null}
            {cond === 'register-sec' || cond === 'contact-sec' ?
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number *</label>

                    {cond === "register-sec" ?                     <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" name='phone' onChange={changeEvent} value={user.phone} /> :                     <input type="tel" className="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" name='phone' onChange={changeEvent} value={contactDfault.phone} />}

                </div> : null}
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email Address *</label>
                {cond === 'register-sec' ? <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={changeEvent} value={user.email} name='email' /> : cond === 'login-sec' ? <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={changeEvent} value={userTwo.email} name='email' /> : <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={changeEvent} value={contact.email} name='email' />
                }

            </div>
            {cond === 'contact-sec' ? <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Comment' name='messgae'></textarea>
            </div> :
                <div className='d-flex'>
                    <div className="mb-3 w-100">
                        <label htmlFor="exampleFormControlInput1" className="form-label" id='password-label'>Password *</label>
                        {cond === 'register-sec' ? <input type="password" className="form-control" id="password" placeholder="Password" onChange={changeEvent} value={user.password} name='password' /> : <input type="password" className="form-control" id="password" placeholder="Password" onChange={changeEvent} value={userTwo.password} name='password' />}

                    </div>
                    {cond === 'register-sec' ?
                        <div className="mb-3 w-100 ms-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Confirm Password:</label>
                            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Confirm Password" onChange={changeEvent} value={user.cpassword} name='cpassword' />
                        </div> : null}
                </div>
            }
            {cond === 'register-sec' ?
                <>
                    <div className="genderBox d-flex mb-3">
                        <div className="form-check w-100">
                            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" onChange={changeEvent} value={user.gender} />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Male
                            </label>
                        </div>
                        <div className="form-check w-100">
                            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" onChange={changeEvent} value={user.gender} />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Female
                            </label>
                        </div>
                    </div>
                    <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            I will Accepet all the aggrement and policy and Term & Condition.
                        </label>
                    </div>
                </>
                : null
            }
            {/* {cond} */}
            {/* <button className='btn btn-primary' onClick={()=>alert('hello')}>{title}</button> */}
            {cond === 'register-sec' ? <Button title={register} btnSub={btnSub} /> : cond === 'login-sec' ?
                <Button title={login} btnSub={btnSub} />
                : <Button title={contact} btnSub={btnSub} />}
            <ToastContainer />
        </form>
    )
}