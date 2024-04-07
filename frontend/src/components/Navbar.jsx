import React from "react";
import { useState } from "react";
import { Link,  } from "react-router-dom";
import { useDispatch,  } from "react-redux";

import { UserDetailsbyName } from "../features/User/UserSlice";


export const Navbar = () => {
  const dispatch = useDispatch();
 

  const [searchText, setsearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const submitSearch = (event) => {
    event.preventDefault();

   dispatch(UserDetailsbyName({name:searchText}));
    setsearchText("");
    
  };

  const handleSearch = (e) => {
    setsearchText(e.target.value.trim());
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="fixed z-50 top-0 left-0 w-full bg-cyan-800 opacity-100 rounded-b-3xl">
      <nav className="max-w-screen-xl mx-auto p-4 flex justify-between items-center ">
        <div className="left">
          <Link to="/" className="mr-6 text-md md:text-4xl font-semibold flex items-center space-x-4 text-white">
          Team Manager<span className="text-md md:text-4xl text-cyan-200">.</span>
        </Link>
        </div>
        <div className="right flex justify-center items-center">
            <Link to="/team">
              <div className="text-black px-4 text-center  mr-3 py-2 rounded-full bg-cyan-100 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                Current Team
              </div>
            </Link>
        <Link to="/allteams">
              <div className="text-black py-2 text-center mr-2 px-4 rounded-full bg-cyan-100 hover:bg-cyan-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                All Teams
              </div>
            </Link>
        </div>
       
      </nav>
    </div>
  );
};
export default Navbar;
