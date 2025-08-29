import { create } from "zustand";
import { fetchImages } from "../services/fetchImages";

export const photosStore = create((set,get)=>{
    return {
        photos:[],
        fetchPhotos: async()=>{
            let photos = await fetchImages();
            set({photos})
        }
    }
})