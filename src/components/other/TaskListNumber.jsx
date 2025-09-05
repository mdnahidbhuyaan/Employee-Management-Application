import React from "react";

const TaskListNumber = () => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen ">
      <div className=" w-[45%] py-6 px-9  bg-red-400 rounded-xl">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl text-medium text-white">New Task</h3>
      </div>
         <div className=" w-[45%] py-6 px-9  bg-blue-400 rounded-xl">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl text-medium text-white">New Task</h3>
      </div>
         <div className=" w-[45%] py-6 px-9  bg-green-400 rounded-xl">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl text-medium text-white">New Task</h3>
      </div>
         <div className=" w-[45%] py-6 px-9  bg-yellow-400 rounded-xl">
        <h2 className="text-2xl font-semibold text-white">0</h2>
        <h3 className="text-xl text-medium text-white">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;
