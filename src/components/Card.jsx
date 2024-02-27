import React from 'react';

const Card = ({title, description}) => {

    return (
    <div className="card col-span-1">
        <div className={`bg-cover bg-center bg-contain h-80 border border-gray-200 rounded-lg shadow relative bg-[url('/public/casa.jpg')]`}>
            <div className="p-5 opacity-0 flex flex-col max justify-center content-center  h-full hover:opacity-100  transition-opacity duration-500 absolute inset-0">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-zinc-300 ">
                    {description}
                </p>
            </div>
        </div>
    </div>
  );
};

export default Card;
