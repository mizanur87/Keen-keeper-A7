import React from "react";

const SingleCardFriend = ({ friend }) => {
  const { name, picture, status, relation, days_since_contact } = friend;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm p-5">
        <figure>
          <img
            className="w-24 rounded-full aspect-square"
            src={picture}
            alt="name"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="font-semibold text-xl text-center ">{name}</h2>
          <p className="text-gray-500">{days_since_contact}d ago</p>
          <div className="card-actions flex flex-col items-center justify-center">
            <div className="badge p-3.5 bg-[#cbfadb] rounded-full">
              {relation}
            </div>
            <div className="badge bg-orange-500 p-3.5 rounded-full">
              {status}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCardFriend;
