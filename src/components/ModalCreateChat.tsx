import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  ModalCreateChat = ({children,onHide,show}:any)=> {


  return (
    <>
      <Modal show={show} onHide={onHide} >
        <Modal.Body>
            {children}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalCreateChat