import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function Beast( props ) {

  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const vote = () => setCount(count + 1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card data-bs-theme="dark" border="primary" style={{ width: '18rem', margin:"1em" }} onClick={handleShow}>
        <Card.Body>

          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" src={props.image_url} />
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button onClick={vote} variant="primary">❤️ {count}</Button>

        </Card.Body>
      </Card>

      {/* MODAL */}

      <Modal className="bg-dark" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Card data-bs-theme="dark" border="primary" style={{ margin:"1em" }}>
            <Card.Body>
              <Card.Img variant="top" src={props.image_url} />
              <Card.Text>
                <p><strong>Description:</strong> {props.description}</p>
                <p><strong>Type:</strong> {props.keyword}</p>
                <p><strong>Horns:</strong> {props.horns}</p>
              </Card.Text>
              <Button onClick={vote} variant="primary">❤️ {count}</Button>
            </Card.Body>
          </Card>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );

}

export default Beast;