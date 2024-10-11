import { useState } from 'react';
import { Link } from 'react-router-dom';

const DichoComponent = ({ dicho }) => {
  const meaning = dicho.actualMeaning.length > 90
                    ? dicho.actualMeaning.substring(0, 40) + '...' 
                    : dicho.actualMeaning ;

  return (
    <div className="hover:cursor-pointer bg-white rounded-xl shadow-md relative flex flex-col justify-center">
      <div className="p-4">
        <Link to={`/dichos/${dicho._id}`}>
          <h3 className="text-2xl font-bold">{dicho.dicho}</h3>
          <p className="mt-2 text-sm">{meaning}</p>
        </Link>
      </div>
    </div>
  )
  }
  
  export default DichoComponent