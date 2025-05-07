import React from 'react';

export const Cards = ({ value, onedit, ondelete }) => {
  return (
    <div className="w-[250px] h-[170px] rounded-lg border-amber-300 shadow-2xl p-4 flex flex-col justify-between border-2px sol border-b-blue-500">
      <div>
        <h1 className="font-bold text-lg to-blue-500">
          <span className="font-semibold">Title:</span> {value.title}
        </h1>

        <p className="text-sm mt-1">
          <span className="font-semibold">Content:</span> {value.content}
        </p>

        <h4 className="text-sm mt-1">
          <span className="font-semibold">Author:</span> {value.author}
        </h4>
      </div>

      <div className="mt-2 flex justify-evenly space-x-2">
        <button
          onClick={() => onedit(value._id)}
          className="border-1 border-black w-[90px] py-1 px-2 rounded-md text-sm bg-blue-300"
        >
          Edit
        </button>
        <button
          onClick={() => ondelete(value._id)}
          className="border-2 border-black w-[90px] py-1 px-2 rounded-md text-sm bg-fuchsia-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
