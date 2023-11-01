/** @format */

import React from "react";

const Spinner = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='animate-pulse w-64 h-64 m-8 rounded-full bg-sky-600'>
        <div className='absolute inset-0 flex items-center justify-center'>
          <div className='h-12 w-12 text-gray-900'>Loading...</div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
