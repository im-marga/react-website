import React from 'react'
import ActionButton from '../partials/ActionButton'

const Banner = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between items-center">
                <div className="max-w-[600px] w-full">
                    <h1 className="text-primary-dark">The <span className="text-primary">Best Dental Experience</span> Awaits</h1>
                    <p className="my-10 opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fuga dolores corporis hic. Id similique, consectetur debitis perspiciatis temporibus harum!</p>
                    <ActionButton label="Explore our Services"/>
                </div>

                <img src="http://placehold.co/600x800" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Banner