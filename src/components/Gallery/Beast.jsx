import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Beast( props ) {

  const [count, setCount] = useState(0);

  function vote() {
     setCount(count + 1);
  }

  return (
    <Card style={{ width: '18rem', margin:"1em" }}>
      <Card.Img variant="top" src={props.image_url} />
      
      <Card.Body>

        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>

        <Button onClick={vote} variant="primary">❤️ {count}</Button>

      </Card.Body>

    </Card>
  );

}

export default Beast;