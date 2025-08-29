import React from 'react';
import { photosStore } from '../store/photosStore';

export default function PhotosList() {
  const { photos } = photosStore();

  return (
    <ul className='text-sm grid grid-cols-3 grid-rows-3 gap-10 my-10'>
      {photos.map((val, id) => (
        <li key={id}>

        <img src={val.thumbnailUrl} width={100} height={100} alt="" />
        </li>
      ))}
    </ul>
  );
}
