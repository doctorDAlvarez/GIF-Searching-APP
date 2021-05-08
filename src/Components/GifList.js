import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs';

const GifList = props => { 
  
  const results = props.data;

  let gifs = results.map( gif => <Gif key={gif.id} url={gif.images.fixed_height.url}/>)
  return(
    <ul className="gif-list">
      { results.length > 0 ? gifs : <NoGifs />}
    </ul> 
  );
}

export default GifList;
