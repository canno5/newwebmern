import React from 'react'
export const ContactInfo = ({ cond }) => {
    return (
        <div className="contact-info">
            {cond === 'contact-sec' ?
                <>  <p><span>Address:</span>House no tqwqdasdsdsdsd</p>
                    <p><span>Email Us:</span>info@gmail.com</p>
                    <p><span>Telephone Number:</span>021 455 452</p>
                </>
                : null}
            <div className="contact-img">
                <img src="images\contact-banner-img.webp" alt="" />
            </div>
        </div>
    )
}
