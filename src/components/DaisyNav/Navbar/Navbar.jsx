// import React from 'react';

import { Menu, X } from "lucide-react";
import Link from "./Link";
import { useState } from "react";

const Navbar = () => {

    const navigationData = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "About",
            path: "/about"
        },
        {
            id: 3,
            name: "Services",
            path: "/services"
        },
        {
            id: 4,
            name: "Contact",
            path: "/contact"
        }
    ];

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>);

    const [open, setOpen] = useState(false)
    return (

        <nav className="flex justify-between mx-10 mt-4">

            <span className="flex" onClick={() => setOpen(!open)}>
                {
                    open? <X className="md:hidden"></X>: <Menu className="md:hidden"></Menu>
                }
                {/* <Menu className="md:hidden"></Menu> */}

                {/* Dropdown menu */}
                <ul className={`md:hidden ${open? 'top-10': '-top-40'} absolute duration-700`}>
                    {
                        links
                    }
                </ul>

                <h3 className="ml-10">My Navbar</h3>               
            </span>

            <ul className="md:flex hidden">
                {
                    links //variable call
                }
            </ul>

            {/* <ul className="flex">
                {
                    navigationData.map(route => <li className="mr-10">
                        <a href={route.path}>{route.name}</a></li>)
                }
            </ul> */}

            {/* <ul className="flex">
                <li className="mr-10"><a href="/">Home</a></li>
                <li className="mr-10"><a href="/about">About</a></li>
                <li className="mr-10"><a href="/blog">Blog</a></li>
            </ul> */}

            <button>sign In</button>
        </nav>
    );
};

export default Navbar;