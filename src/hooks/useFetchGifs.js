import React from 'react'
import { useState, useEffect } from 'react';
import { getGifs } from '../Helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

    return {
        images: images,
        isLoading: true
    }
}
