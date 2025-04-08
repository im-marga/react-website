import React from 'react'
import { siteURL } from '../helpers/functions-general';
import { pages } from './header-data';
import ActionButton from '../partials/ActionButton';

const Header = () => {
  return (
    <header className="py-6">
        <div className="container">
            <div className="flex justify-between items-center">
                <a href="{siteURL}">Dental.</a>
                <nav>
                    <ul className="flex gap-10 font-bold">
                    {pages.map((page, key)=>{
                        return(<li><a href={`${siteURL}${page.slug}`}>{page.label}</a></li>);
                    })}
                    </ul>
                </nav>
                <ActionButton label="Book Now"/>         
            </div>
        </div>
    </header>
  )
}

export default Header