import React, { useState, useEffect } from 'react';
import { all, remove } from '../api/all';
import { Cards } from './Cards';
import { useNavigate } from 'react-router-dom';

export const PostCard = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await all();
      setdata(response);
    }
    fetchdata();
  }, []);

  const handleedit = (id) => {
    navigate(`/Edit/${id}`);
  };

  const hanledelete = async (id) => {
    await remove(id);
    setdata((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center p-4 mt-8">
      {data.map((item) => (
        <div key={item._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <Cards value={item} onedit={() => handleedit(item._id)} ondelete={() => hanledelete(item._id)} />
        </div>
      ))}
    </div>
  );
};
