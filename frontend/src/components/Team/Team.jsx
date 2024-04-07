import React from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";
	

import { emptyTeam,removeFromTeam } from "../../features/Team/team";
import { baseUrl } from "../..";
const Team = () => {
  const dispatch = useDispatch();
  let team = useSelector((state) => state.team.selectedTeam);
 
  const [users, setMembers] = useState(team);
  const [teamname, setTeamname] = useState(team);
  
  const handleCreateTeam = async() => {
    if (teamname) {
      console.log(users);
      let {data} =await axios.post(`${baseUrl}/api/team`, {
        name:teamname,
        members: users,
      });
      
      dispatch(emptyTeam());
      alert("Team Created Successfully");
    } else {
     alert("Please Enter Team Name");
    }
  };
 
  useEffect(() => {
  
  let data = localStorage.getItem("selectedTeam");
  if (data) {
    setMembers(JSON.parse(data));
  }
  
   
  }, [team])

  return (
    <>  
    <div className="mx-auto mt-20 grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {users && Array.isArray(users) && users?.map((user, i) => (
        <div key={i} className="rounded-2xl shadow-2xl border bg-gradient-to-b from-white via-white to-cyan-500 shadow-cyan-200">
          <img
            src={user.avatar}
            alt="Laptop"
            className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
          />
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg text-cyan-900 font-semibold">{user.first_name+" "+user.last_name}</h1><hr className='mt-2 border-cyan-800'/>
            <p className="mt-2 text-sm text-black">
           Email: {user.email}
            </p>
            <p className="mt-2 text-sm text-black">
           Gender: {user.gender}
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
               {user.domain}
              </span>

            </div>
           
            <button
              type="button"
              onClick={() => {dispatch(removeFromTeam(user))
             }}
              className="mt-4 w-full rounded-2xl bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add to Team
            </button>
           
          </div>
        </div>
      ))}
      </div>
      <div>
      {users.length>0? <>
     <div className="flex justify-center items-center  flex-col">
     <hr className='mt-2 border-cyan-800'/>
     <input type="text" onChange={(e)=>setTeamname(e.target.value)} placeholder="Enter Team Name To Set" className="h-10 lg:w-auto w-[80vw] mr-3 mb-2 lg:mt-0 pl-3 pr-8 text-sm placeholder-black text-black border border-black font-bold bg-gradient-to-r from-gray-100 to-cyan-100 rounded-full focus:outline-none focus:bg-white focus:text-black" />
        <Link to="/allteams">
            <button onClick={handleCreateTeam} className="mb-2 lg:mt-0 w-[80vw] mr-2 lg:w-auto h-10 lg:h-auto px-4 py-2 text-sm font-semibold text-white bg-black rounded-full shadow-md hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 focus:ring-offset-white">
              Create Team
            </button>
        </Link>
        <hr className='mt-2 border-cyan-800'/>
     </div>
        </>
         :<>
         <div className="flex flex-col justify-center items-center">
         <h1 className="mt-4 w-max text-center  rounded-sm px-2 py-1.5 text-sm font-semibold  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Team is empty</h1>
          <Link to="/">
            <button  className="mt-4 w-max rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
              GO TO Create Team
            </button>
        </Link>
         </div>
          </>}
      </div>
    </>
  );
};

export default Team;
