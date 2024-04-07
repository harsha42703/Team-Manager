import React, { useState } from 'react';
import Dropdown from './Dropdown';
import { useDispatch, useSelector } from "react-redux";
import { UserDetailsbyFilter, selectFilteredUsers } from '../features/User/UserSlice'; 
const Filter = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectFilteredUsers); 

  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAvailability, setSelectedAvailability] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    const filterObj = {
      gender: selectedGender,
      available: selectedAvailability,
      domain: selectedDomain,
      name: searchText,
    };
    dispatch(UserDetailsbyFilter(filterObj));
  };

  const handleGenderChange = (option) => {
    setSelectedGender(option);
  };

  const handleAvailabilityChange = (option) => {
    if (option === "Not Available") {
      option = false;
    }
    if (option === "Available") {
      option = true;
    }
    setSelectedAvailability(option);
  };

  const handleDomainChange = (option) => {
    setSelectedDomain(option);
  };

  return (
    <>
    <div className="mt-24 md:mt-16 flex flex-col pt-14 lg:flex-row md:flex-row items-center justify-center lg:justify-start md:justify-start">
     <div className='flex flex-col justify-center items-center mx-3 w-[80vw] md:flex-row'>
     <Dropdown
        options={["Female", "Male", "Agender", "Bigender"]}
        title={"Gender"}
        onOptionChange={handleGenderChange}
      />
      <Dropdown
        options={["Not Available", "Available"]}
        title={"Availability"}
        onOptionChange={handleAvailabilityChange}
      />
      <Dropdown
        options={["Business Development", "Management", "Finance", "Sales", "Marketing", "IT", "UI Designing"]}
        title={"Domain"}
        onOptionChange={handleDomainChange}
      />
      <input
        type="text"
        className="h-10 lg:w-auto w-[80vw] mr-3 mb-2 lg:mt-0 pl-3 pr-8 text-sm placeholder-black text-black border border-black font-bold bg-gradient-to-r from-gray-100 to-cyan-100 rounded-full focus:outline-none focus:bg-white focus:text-black"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="mb-2 lg:mt-0 w-[80vw] mr-2 lg:w-auto h-10 lg:h-auto px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-md hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white"
      >
        Search
      </button>
     </div>
    </div>
    <hr className='border-cyan-700 mt-6'/>
  </>
  
  );
};

export default Filter;
