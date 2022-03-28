import React, { useEffect } from 'react';

export const Meme = () => {

    useEffect(() => {

        
        fetch('https://api.imgflip.com/get_memes').then(res =>
        res.json().then(res => {
            const memes = res.data.memes;
        }));

    }, []);

    
  return (<>Hello</>);
};
