import React, { FunctionComponent } from "react";
import ReactDOM from 'react-dom';
import { Box, Button } from "@material-ui/core";
import { styled } from "@mui/material";

interface ModalProps {
  open: boolean;
  hide: ()=>void;
}
const ModalOverlay = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: .5;
`
const ModalWrapper = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`
const ModalBody = styled(Box)`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`
const ModalBtn = styled(Button)`
  font-size: .9rem;
  font-weight: 700;
  margin-top: 100px;
  border: none;
  border-radius: 3px;
  padding: .3rem 1rem;
  margin-left: .5rem;
`




const Modal:FunctionComponent<ModalProps> = ({ open, hide }) => open ? ReactDOM.createPortal(

  <>
    <ModalOverlay/>
    <ModalWrapper role="dialog">
      <ModalBody>
        <div className="modal-header">
          <ModalBtn onClick={hide}>
            <span aria-hidden="true">&times; close</span>
          </ModalBtn>
        </div>
        <p>
          Hello, I'm a modal.
        </p>
      </ModalBody>
    </ModalWrapper>
  </>, document.body
) : null;

export default Modal;
