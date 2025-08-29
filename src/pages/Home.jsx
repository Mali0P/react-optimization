import React, { lazy, Suspense, useState } from "react";
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
    <div className="container flex-col">
      <div>Home</div>
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
