import React from 'react'
import { ContactInfo } from './ContactInfo'
import { ContactForm } from './ContactForm'

export const ContactCard = ({clscond, title}) => {
  return (
            <div className="contact-sec h-100 my-4">
                <div className="container">
                    <h1 className='py-5 text-center'>{title}</h1>
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6">
                            <ContactInfo cond={clscond} />
                        </div>
                        <div className="col">
                            <ContactForm cond={clscond}/>
                        </div>
                    </div>
                </div>
            </div>
  )
}
