import React, { createContext, useState } from 'react'
import { ContactCard } from './ContactCard';
export const TitleCon = createContext();

export const ChangeInpEvent = createContext();
export const BtnSubmit = createContext();
export const ContactVal = createContext();
const contactForm = {
    name: "",
    phone: "",
    email: "",
    msg: "",
};


export const Contact = () => {
    const [contact, setContact] = useState(contactForm);
    const InputEvent = (e) => {
        const { value, name } = e.target;
        setContact({ ...contact, name: value })
    }
    const btnMessage = (e) => {
        e.preventDefault();
    }
    return (
        <TitleCon.Provider value='Submit'>
            <ContactVal.Provider value={contactForm}>
                <ChangeInpEvent.Provider value={InputEvent}>
                    <BtnSubmit.Provider value={btnMessage}>
                        <ContactCard clscond='contact-sec' title='Contact Us' />
                    </BtnSubmit.Provider>
                </ChangeInpEvent.Provider>
            </ContactVal.Provider>
        </TitleCon.Provider>
        // <div className="contact-sec">
        //     <div className="container">
        //         <h1 className='py-5 text-center'>Contact US</h1>
        //         <div className="row">
        //             <div className="col">
        //                 <ContactInfo />
        //             </div>
        //             <div className="col">
        //                 <ContactForm/>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
