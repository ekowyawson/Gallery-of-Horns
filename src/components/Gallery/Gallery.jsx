import React, {useState} from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Beast from './Beast';
import styles from './gallery.module.css'


function Gallery(props) {

  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle input change and update the search term
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Regular expression (regex) pattern for fuzzy search
  const searchRegex = new RegExp(searchTerm, 'i');

  // Filter the props.list based on the search term
  const filteredList = props.list.filter(
    (beast) =>
      searchRegex.test(beast.title) ||
      searchRegex.test(beast.keyword)
  );

  return (
    <>
      <InputGroup className="mb-3 search-bar">
        <FormControl
          placeholder="Search by title or keyword..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </InputGroup>

      <main className={styles.main}>
        {
          filteredList.map( (beast, index) => (
             <Beast 
              key={beast._id}
              image_url={beast.image_url}
              title={beast.title}
              description={beast.description}
              horns={beast.horns}
              keyword={beast.keyword}
            />
            
          ))}
      </main>
    </>
  );
}

export default Gallery;
