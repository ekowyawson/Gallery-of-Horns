import React from 'react';

// "attributes" come in as "props"
function HornedBeast( {props} ) {

  return (
    <div>
      <div className="image-container">
        {props.map(item => (
          <div key={item._id} className="image-card">
            <img src={item.image_url} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Keyword: {item.keyword}</p>
            <p>Horns: {item.horns}</p>
          </div>
        ))}
      </div>
    </div>
  );

}

export default HornedBeast;
