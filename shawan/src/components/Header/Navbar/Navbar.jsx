import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "@material-tailwind/react";
const Navbar = () => {
    return (
        <div className='flex justify-between items-center shadow-lg p-5'>
            <div className="text-3xl">Phone Shop
            </div>
            <nav>
                <ul className='flex gap-5 text-xl'>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline" : ""
                            }
                        >
                            Favorites
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "underline" : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
           <Button>Button</Button>
        </div>
    );
};

export default Navbar;