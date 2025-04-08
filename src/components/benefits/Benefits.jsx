import React from 'react'
import SectionHeader from '../partials/SectionHeader'
import ListItem from '../partials/ListItem'
import ActionButton from '../partials/ActionButton'
import { benefits } from './benefits-data'

const Benefits = () => {
  return (
    <section className="py-24">
        <div className="container">
            <div className='text-center max-w-[842px] mx-auto'>
            <SectionHeader
                tag="Why Choose Us"
                primary="Benefits of Our Dental Services:"
                secondary="Your Path to a Healtier Smile"
            />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-15 ">
                <img src="http://placehold.co/500x500" alt="" className="rounded-full" />
                <div>
                    <p className="opacity-50">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nam earum doloribus blanditiis repellat deleniti tempore id. Et, unde ipsum?
                    </p>
                    <div className='grid grid-cols-3 mb-5'>
                    {benefits.map((item, key)=>{
                        return(
                        <div className="py-5 border-t border-gray-200 border-b ">
                        <p className="font-bold text-[50px]">{item.total}</p>
                        <p>{item.title}</p> 
                        </div>
                        );
                    })}
                    </div>
                    <ul className="space-y-3 mb-10">
                        <ListItem text="Easy Online Appointment Booking"/>
                        <ListItem text="Experienced and Caring Dentists"/>
                        <ListItem text="Advanced Dental Equipment"/>
                    </ul>

                    <ActionButton label="Book an Appointment"/>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Benefits