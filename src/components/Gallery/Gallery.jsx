import React from 'react';

import styles from './gallery.module.css'

import Beast from './Beast';

function Gallery(props) {
  return (
    <main className={styles.main}>
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
    </main>
  );
}

export default Gallery;
