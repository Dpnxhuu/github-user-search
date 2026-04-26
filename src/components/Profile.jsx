import React from "react";

const Profile = ({ data }) => {
  return (
    <div className="bg-black w-full px-3 md:w-150 flex gap-3 ring-1 ring-gray-700 rounded-lg p-5 flex-col gap-3">
      <div className="text-white flex items-center gap-3">
        <div className="">
          <img
            src={data ? data.avatar_url : "/images/react.svg"}
            alt="avatar"
            className="rounded-full h-15 w-15"
          />
        </div>
        <div className="">
          {data && <h1 className="text-2xl font-semibold">{data.name}</h1>}
          {data && (
            <p className="text-sm font-semibold text-gray-300">@{data.login}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-3 text-white">
        {data && <p>{data.bio? data.bio : 'No bio '}</p>}
        <div className="flex flex-col sm:flex-row gap-3 text-white justify-around w-full flex-wrap">
          <div className="flex-1 text-center ring-1 ring-gray-700 rounded-lg p-3">
            <span className="text-sm font-semibold text-gray-400">
              Followers
            </span>
            {data && <p className="text-2xl font-semibold">{data.followers}</p>}
          </div>
          <div className="flex-1 text-center ring-1 ring-gray-700 rounded-lg p-3">
            <span className="text-sm font-semibold text-gray-400">
              Following
            </span>
            {data && <p className="text-2xl font-semibold">{data.following}</p>}
          </div>
          <div className="flex-1 text-center ring-1 ring-gray-700 rounded-lg p-3">
            <span className="text-sm font-semibold text-gray-400">Repos</span>
             {data && <p className="text-2xl font-semibold">{data.public_repos}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
