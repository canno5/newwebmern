import React from 'react'
import { ServicesArr } from './arrray/servicearr'
import { ServiceCard } from './ServiceCard'

export const Services = () => {
    return (
        <div className="services-sec my-4">
            <div className="container">
            <h1 className='py-4 text-center'>Our Services</h1>
                <div className="row gy-4">
                    {ServicesArr.map(val => <ServiceCard key={val.id} title={val.title} para={val.para} img="/digitalmark.png"/>)}
                </div>
            </div>
        </div>
    )
}
