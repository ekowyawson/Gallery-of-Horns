import React from 'react';

import Beast from './Beast';

function Gallery(props) {
  return (
    <>
      {
        props.list.map( (beast, index) => {

          return <Beast 
            key={index}
            image_url={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword}
          />
          
        })
      }
    </>
  );
}

export default Gallery;
