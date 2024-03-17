import React from "react";
import { Modal, Portal, Text, Button, PaperProvider } from 'react-native-paper';

const SmartModal = ({ closeModal, modalOptions }) => {
  const title = modalOptions && modalOptions.title ? modalOptions.title : null;
  const footer =
    modalOptions && modalOptions.footer ? modalOptions.footer : null;
  const body = modalOptions && modalOptions.body ? modalOptions.body : null;
  const bodyClose =
    modalOptions && modalOptions?.bodyClose === false ? false : true;
  const modalClass =
    modalOptions && modalOptions?.modalClass ? modalOptions?.modalClass : {};
 
  //
  //  console.log("modal class " , okFunction)
  const closeModalOnBody = () => {
    if (bodyClose === true) {
      closeModal();
    }
  };



  return (
    <Portal>
      <Modal
        visible={true}
        onDismiss={closeModalOnBody}
        contentContainerStyle={modalClass}
      >
       {body}
      </Modal>
    </Portal>
  );
};

export default SmartModal;

/*
 <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content">
        {modalContent}
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>    
    */
