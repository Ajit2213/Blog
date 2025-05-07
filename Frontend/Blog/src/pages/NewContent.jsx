import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create } from '../api/all';

export const NewContent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    author: '',
    content: '',
  });

  const handler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const final = await create(data);
    console.log(final);

    setData({
      title: '',
      author: '',
      content: ''
    });

    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4">Create New Post</h2>

        <div>
          <label htmlFor="author" className="block text-sm font-medium">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={data.author}
            onChange={handler}
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={data.title}
            onChange={handler}
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium">Content</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={data.content}
            onChange={handler}
            className="mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
};
