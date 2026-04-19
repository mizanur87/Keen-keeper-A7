import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import {
  BellRing,
  Archive,
  Trash2,
  Phone,
  MessageSquare,
  Video,
  Pencil,
} from "lucide-react";
import { FriendContext } from "../../Context/FriendContext";

// const friendsPromise = fetch("/public/friendsData.json").then((res) =>
//   res.json(),
// );

const FriendDetail = () => {
  const { id } = useParams();
  //   console.log(id, "itspara");

  //   const friends = use(friendsPromise);
  //   console.log("Friends=", friends);

  const friends = useLoaderData();
  //   console.log("Friends=", friends);

  const expectedFriend = friends.find((friend) => friend.id == id);
  console.log(expectedFriend);

  const {
    name,
    picture,
    email,
    days_since_contact,
    goal,
    next_due_date,
    bio,
    status,
    relation,
  } = expectedFriend;

  const friendContext = useContext(FriendContext);

  console.log(friendContext);

  const [call, SetCall] = useState([]);

  const handleCall = (id) => {
    // console.log("This is the book id", id);
    SetCall([...call, id]);
  };

  return (
    <div>
      <div className="p-8 bg-[#f8fafc] min-h-screen font-sans text-slate-700">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Profile Card & Actions */}
          <div className="md:col-span-4 space-y-4">
            {/* Profile Card */}
            <div className="card bg-white shadow-sm border border-slate-200 p-8 flex flex-col items-center text-center rounded-xl">
              <div className="avatar mb-4">
                <div className="w-24 rounded-full border-4 border-slate-100">
                  <img src={picture} alt={name} />
                </div>
              </div>
              <h2 className="text-xl font-bold text-slate-800">{name}</h2>
              <div className="flex flex-col gap-2 my-3 items-center">
                <span className="badge bg-[#ff4d4d] border-none text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  {status}
                </span>
                <span className="badge bg-[#e8f5e9] border-none text-[#2e7d32] text-[10px] font-bold px-3 py-1 uppercase tracking-wider">
                  {relation}
                </span>
              </div>
              <p className="italic text-slate-500 text-sm mb-1 leading-relaxed">
                {bio}
              </p>
              <p className="text-xs text-slate-400">Preferred: {email}</p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button className="btn btn-block bg-white hover:bg-slate-50 text-slate-700 border-slate-200 justify-start px-6 font-medium shadow-sm rounded-lg">
                <BellRing className="mr-3 h-4 w-4 text-slate-500" /> Snooze 2
                Weeks
              </button>
              <button className="btn btn-block bg-white hover:bg-slate-50 text-slate-700 border-slate-200 justify-start px-6 font-medium shadow-sm rounded-lg">
                <Archive className="mr-3 h-4 w-4 text-slate-500" /> Archive
              </button>
              <button className="btn btn-block bg-white hover:bg-red-50 text-red-500 border-slate-200 justify-start px-6 font-medium shadow-sm rounded-lg group">
                <Trash2 className="mr-3 h-4 w-4 text-red-400 group-hover:text-red-500" />{" "}
                Delete
              </button>
            </div>
          </div>

          {/* Right Column: Stats & Goals */}
          <div className="md:col-span-8 space-y-6">
            {/* Top Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="card bg-white shadow-sm border border-slate-200 p-6 text-center rounded-xl">
                <span className="text-4xl font-bold text-[#244d3f]">
                  {days_since_contact}
                </span>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-tight mt-2">
                  Days Since Contact
                </p>
              </div>
              <div className="card bg-white shadow-sm border border-slate-200 p-6 text-center rounded-xl">
                <span className="text-4xl font-bold text-[#244d3f]">
                  {goal}
                </span>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-tight mt-2">
                  Goal (Days)
                </p>
              </div>
              <div className="card bg-white shadow-sm border border-slate-200 p-6 text-center rounded-xl flex flex-col justify-center">
                <span className="text-lg font-bold text-slate-700 leading-none">
                  {next_due_date}
                </span>
                <p className="text-xs font-medium text-slate-400 uppercase tracking-tight mt-2">
                  Next Due
                </p>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="card bg-white shadow-sm border border-slate-200 p-8 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-[#244d3f]">
                    Relationship Goal
                  </h3>
                  <p className="mt-4 text-slate-500">
                    Connect every{" "}
                    <span className="font-bold text-slate-800">30 days</span>
                  </p>
                </div>
                <button className="btn btn-sm bg-white hover:bg-slate-50 text-slate-500 border-slate-200 normal-case px-4 rounded-md shadow-sm">
                  <Pencil className="w-3 h-3 mr-2" /> Edit
                </button>
              </div>
            </div>

            {/* Quick Check-In Card */}
            <div className="card bg-white shadow-sm border border-slate-200 p-8 rounded-xl">
              <h3 className="text-lg font-bold text-[#244d3f] mb-6">
                Quick Check-In
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleCall(id)}
                  className="flex flex-col items-center justify-center p-6 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200 rounded-xl transition-all group"
                >
                  <Phone className="w-6 h-6 mb-2 text-slate-600 group-hover:text-[#244d3f]" />
                  <span className="text-sm font-semibold text-slate-600">
                    Call
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200 rounded-xl transition-all group">
                  <MessageSquare className="w-6 h-6 mb-2 text-slate-600 group-hover:text-[#244d3f]" />
                  <span className="text-sm font-semibold text-slate-600">
                    Text
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center p-6 bg-[#f8fafc] hover:bg-[#f1f5f9] border border-slate-200 rounded-xl transition-all group">
                  <Video className="w-6 h-6 mb-2 text-slate-600 group-hover:text-[#244d3f]" />
                  <span className="text-sm font-semibold text-slate-600">
                    Video
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;
