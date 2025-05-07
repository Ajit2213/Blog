import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { singleton, update } from '../api/all';

export const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    content: ''
  });

  useEffect(() => {
    const fetchSinglePost = async () => {
      const response = await singleton(id);
      setFormData(response); 
    };
    fetchSinglePost();
  }, [id]);

  const handler = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(id, formData);
    // alert("Post updated!");
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Edit Your Post</h2>

        <div>
          <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handler}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handler}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            rows="4"
            value={formData.content}
            onChange={handler}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2.5 shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-lg font-medium shadow-md transition duration-300"
        >
           Update Post
        </button>
      </form>
    </div>
  );
};
