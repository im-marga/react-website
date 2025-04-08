import { Check } from 'lucide-react'
import React from 'react'
import ListItem from '../partials/ListItem'
import SectionHeader from '../partials/SectionHeader'
import ActionButton from '../partials/ActionButton'

const About = () => {
  return (
    <section className='py-20'>
        <div className="container">
            <div className="grid grid-cols-2 gap-24">
                <img src="http://placehold.co/500x450" alt="" className="w-full"/>
                <div className="max-w-[500px]">
                    <SectionHeader
                        tag="About Us"
                        primary="15 years of Expertise"
                        secondary="in Dental Care"
                    />

                    <p className="opacity-50 py-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates perferendis maxime laboriosam necessitatibus asperiores enim consectetur sint ratione itaque soluta.</p>

                    <ul className="space-y-3 mb-10">
                        <ListItem text="Premium Dental Servcies You Can Trust"/>
                        <ListItem text="Award-Winning Expert Dental Care"/>
                        <ListItem text="Dedicated Experts Behind Every Smile"/>
                    </ul>

                    <ActionButton label="Learn More"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About