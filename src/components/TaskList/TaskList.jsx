import React from "react";

const TaskList = () => {
  return (
    <div
      id="taskList"
      className="h-[55vh] overflow-x-auto flex items-center justify-start gap-5 w-full py-5 flex-nowrap  mt-10"
    >
      <div className="flex-shrink-0 h-full w-[400px] bg-green-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded-sm">
            High
          </h3>
          <h5 className="text-white text-sm">20 feb 2024</h5>
        </div>
        <h2 className="text-white mt-5 font-semibold text-2xl">
          Make a youtube video
        </h2>
        <p className="text-white text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate a
          necessitatibus ea explicabo cupiditate id aspernatur adipisci atque
          similique perspiciatis voluptates.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] bg-blue-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded-sm">
            High
          </h3>
          <h5 className="text-white text-sm">20 feb 2024</h5>
        </div>
        <h2 className="text-white mt-5 font-semibold text-2xl">
          Make a youtube video
        </h2>
        <p className="text-white text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate a
          necessitatibus ea explicabo cupiditate id aspernatur adipisci atque
          similique perspiciatis voluptates.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] bg-yellow-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded-sm">
            High
          </h3>
          <h5 className="text-white text-sm">20 feb 2024</h5>
        </div>
        <h2 className="text-white mt-5 font-semibold text-2xl">
          Make a youtube video
        </h2>
        <p className="text-white text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate a
          necessitatibus ea explicabo cupiditate id aspernatur adipisci atque
          similique perspiciatis voluptates.
        </p>
      </div>
      <div className="flex-shrink-0 h-full w-[400px] bg-teal-400 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm text-white px-3 py-1 rounded-sm">
            High
          </h3>
          <h5 className="text-white text-sm">20 feb 2024</h5>
        </div>
        <h2 className="text-white mt-5 font-semibold text-2xl">
          Make a youtube video
        </h2>
        <p className="text-white text-sm mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate a
          necessitatibus ea explicabo cupiditate id aspernatur adipisci atque
          similique perspiciatis voluptates.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
