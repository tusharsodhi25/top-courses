
import React from 'react';

const Filter = ({ filterData, category, setCategory }) => {

  const filterhandler = (title) => {
    setCategory(title); 
  }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto
                    py-4 justify-center'>
      {Array.isArray(filterData) ? (
        filterData.map((data) => (
          <button
            className={`text-sm px-2 py-1 rounded-md font-medium
                       text-white bg-black hover:bg-opacity-50 hover:bg-[#28283d]
                       border-2  transition-all duration-300 ${
                         category === data.title ? 'bg-opacity-60 border-white' : 'bg-opacity-40 border-transparent'
                       }`}
            key={data.id}
            onClick={() => filterhandler(data.title)} 
          >
            {data.title}
          </button>
        ))
      ) : (
        <p>filterData is not an array</p>
      )}
    </div>
  );
};

export default Filter;


