import React, { useEffect, useState } from 'react'
import { Modal, show } from 'react-bootstrap'

const MovieDetails = ({Title, Poster, Year}) => {

  const [show, setShow] = useState(false)
  
  const handleShow = ()=> {
    setShow(true)
  }

  const handleClose = ()=> {
    setShow(false)
  }
 
  return (
   <>
   <div className='card text-center bg-secondary mb-3 '>
   <div className='card-body '>
    <img className='card img-top' src={Poster}/>
    <h3>{Title}</h3>
    <div className='card-body'>
      <button type='button' className='btn btn-dark' onClick={handleShow}>Details</button>
      <Modal show = {show} onHide= {handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={Poster}  />
          <h3>{Title}</h3>
          <h4>Releasing Year : {Year}</h4>
        </Modal.Body>
      </Modal>
    </div>
    </div>
  </div>
    </>
  )
}

export default MovieDetails