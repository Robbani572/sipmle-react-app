import React, { useState } from "react";
import Link from "../link/Link";
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Nav = () => {
  const [open, setOpen] = useState(false);


  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'About',
      path: '/about'
    },
    {
      id: 3,
      name: 'Contact',
      path: '/contact'
    },
    {
      id: 4,
      name: 'Shop',
      path: '/shop'
    },
    {
      id: 5,
      name: 'Blog',
      path: '/blog'
    }
  ]

  return (
    <nav className="bg-gray-900 text-white">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {
            open === true ?
              <XMarkIcon className="h-6 w-6 text-purple-500" />
              : <Bars3Icon className="h-6 w-6 text-purple-500" />
          }
        </span>

      </div>


      <ul className={`md:flex bg-gray-900 rounded-b-md justify-center absolute duration-500 md:static ${open ? 'top-6' : '-top-96'}`}>
        {
          routes.map(route => <Link
            key={route.id}
            route={route}
          ></Link>)
        }
      </ul>
    </nav>
  )
};

export default Nav;