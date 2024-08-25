import React from 'react'
import { IoMdMenu } from 'react-icons/io'

const navbarMenu = [
    {
        id: 1,
        title: "Home",
        path: "/",
    },
    {
        id: 2,
        title: "Service",
        path: "#",
    },
    {
        id: 3,
        title: "About",
        path: "#",
    },
    {
        id: 4,
        title: "Members",
        path: "#",
    },
    {
        id: 5,
        title: "Contact",
        path: "#",
    },
    
];

export const Navbar = () => {
  return (
    <nav className='relative z-20'>
          <div className="container py-10 flex justify-between items-center">
              {/* Logo section */}
              <div>
                  <h1 className='font-bold text-2xl shadow-[0px_10px_8px_-10px_#9f1239]'>
                      New CODER
                  </h1>
              </div>
              {/* menu section */}
              <div className=' hidden lg:block'>
                  <ul className='flex items-center gap-3'>
                      {navbarMenu.map((menu) => (
                          <li key={menu.id}>
                              <a href={menu.path} className='inline-block py-1 px-3 text-primary hover:text-secondary group-hover:duration-300 relative group'>
                                  <div className='w-2 h-0.5 bg-secondary absolute mt-4 left-1/2  -translate-x-1/2 top-1/2 group-hover:block  hidden'></div>
                                  {menu.title}</a>
                          </li>
                      ))}
                      <button className='btn-primary'>Sign in</button>
                  </ul>
              </div>
              {/* main menu section */}

              <div className="lg:hidden">
                  <IoMdMenu className='text-4xl'></IoMdMenu>
              </div>
              
          </div>  
    </nav>
  )
}
