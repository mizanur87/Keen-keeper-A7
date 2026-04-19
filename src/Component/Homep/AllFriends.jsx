import React, { use } from "react";
import SingleCardFriend from "./SingleCardFriend";

const friendsPromise = fetch("/friendsData.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);
  console.log("Friends=", friends);
  return (
    <div className="my-10 container mx-auto">
      <h2 className="font-bold text-3xl text-center">Friends</h2>
      <div className="grid grid-cols-1 gap-1 md:grid-cols-4 gap-10">
        {friends.map((friend, index) => (
          <SingleCardFriend key={index} friend={friend}></SingleCardFriend>
        ))}
      </div>
    </div>
  );
};

export default AllFriends;
