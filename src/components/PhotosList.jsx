import React from 'react';
import { photosStore } from '../store/photosStore';

export default function PhotosList() {
  const { photos } = photosStore();

  return (
    <div className='text-sm  w-[90vw] grid grid-cols-3 grid-rows-3 gap-10 my-10'>
      {photos.map((val, id) => (
        <div key={id} className='mt-8'>
        <img src={val.images[0]}  alt="" className='object-cover w-[100%] h-60' />
        </div>
      ))}
    </div>
  );
}
