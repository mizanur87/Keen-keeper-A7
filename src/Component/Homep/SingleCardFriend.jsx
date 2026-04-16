import React from "react";
import { Link } from "react-router";

const SingleCardFriend = ({ friend }) => {
  const { id, name, picture, status, relation, days_since_contact } = friend;
  return (
    <div>
      <Link
        to={`/friendDetail/${id}`}
        className="card bg-base-100  shadow-lg p-5"
      >
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
      </Link>
    </div>
  );
};

export default SingleCardFriend;
