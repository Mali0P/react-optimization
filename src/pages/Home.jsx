import React, { lazy, Suspense, useEffect, useState } from "react";
import { photosStore } from "../store/photosStore";

const PhotosList = lazy(()=>import('../components/PhotosList')) 
export default function Home() {
  const { fetchPhotos } = photosStore();
    const [showPhotos, setShowPhotos] = useState(false);
    console.log(showPhotos)
  const handleClick = async () => {
await fetchPhotos()
setShowPhotos(true)
  };


  return (
 <div className="container mt-8 flex-col min-h-screen py-10">

      <div>Home / Lazy Loading</div>
      <div>
         {showPhotos ? (
    <Suspense fallback={<div>Loading images...</div>}>
      <PhotosList /> 
    </Suspense>
  ) : (
    <div>Images Will be Showed Here</div>
  )}
      </div>

      <div className="cursor-pointer" onClick={() => handleClick()}>
        Show Images
      </div>
    </div>
  );
}
