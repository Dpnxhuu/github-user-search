import React, { use, useEffect, useRef, useState } from "react";
import Profile from "./Profile";
import SkeletonCard from './SkeletonCard';

const Search = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleInput() {
    setLoading(true)
    setError('')
    const res = await fetch(`https://api.github.com/users/${value}`)
    const data = await res.json();
    
    if(res.ok){
        setUserData(data);
        setError('');
    }
    else{
        setUserData(null)
        setError("User not found!")
    }
    setLoading(false)
  }

  return (
    <div className="mt-30 w-full px-3 md:w-150 flex flex-col gap-3 p-1">
      <div className="text-white">
        <h1 className="font-semibold text-2xl">Github user search</h1>
        <p className="text-gray-300">Search any Github username</p>
      </div>
      <div className="flex gap-2">
        <input
          className="w-full placeholder:text-gray-300 text-white outline-[1px] outline-gray-500/80 hover:outline-gray-500/100 focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-1 transition-all duration-200"
          type="text"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
        type="button"
          onClick={handleInput}
          className="text-white outline-[1px] outline-gray-500/80 py-1 px-3 rounded-lg hover:bg-gray-100/15 transition-all duration-200 active:scale-[0.98] cursor-pointer"
        >
          Search
        </button>
      </div>

      
    {loading ? <SkeletonCard /> : userData && <Profile data={userData} />}
    {error && <p className="text-white text-2xl font-semibold mt-10 text-center">{error}</p>}
    </div>
  );
};

export default Search;
