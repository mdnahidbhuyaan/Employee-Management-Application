import React from 'react'

const CreateTask = () => {
  return (
   <div className="p-5 bg-white mt-7 rounded">
        <form className="flex flex-wrap shadow-md w-full items-start justify-between p-10 bg-teal-100">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-800 md-0.5">Task title</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="Make a ui design" />
            </div>
            <div>
              <h3 className="text-sm text-gray-800 md-0.5">Date</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="date" placeholder="Select date"/>
            </div>
            <div>
              <h3 className="text-sm text-gray-800 md-0.5">Asign to</h3>
              <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="employee name" />
            </div>
            <div>
              <h3 className="text-sm text-gray-800 md-0.5">Category</h3>
              <input className="text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" type="text" placeholder="design, dev, etc" />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-800 md-0.5">Description</h3>
            <textarea className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" name="" id="" cols="30" rows="10"></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-[80%]  text-white">Create Task</button>
          </div>

        </form>
      </div>
  )
}

export default CreateTask
