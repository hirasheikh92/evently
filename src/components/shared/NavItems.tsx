"use client"
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();
    return (
        <ul className='md:flex-between flex md:flex-row w-full flex-col items-start gap-5 '>
            {headerLinks.map((link, index) => {
                const isActive = pathname === link.route;
                return (
                    <li 
                    key={index}
                    className={`${
                        isActive && 'text-primary-500'
                      } flex-center p-medium-16 whitespace-nowrap`}>
                        <Link href={link.route} className="nav-link">{link.label}</Link>
                    </li>
                )



            })}
        </ul>
    )
}

export default NavItems
