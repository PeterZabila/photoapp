import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import style from './style.module.css'
import { Button, DialogContent, DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog } from '@mui/material';

const modalRootElement = document.querySelector("#modal");

const Modal = ({open, onClose, mark}) => {
const element = useMemo(() => document.createElement("div"), []);

useEffect(() => {
  modalRootElement.appendChild(element);

  return () => {
    modalRootElement.removeChild(element)
  }
})

if(open) {
  return createPortal(
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="pass"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContentText>
      </DialogContent>
  <DialogActions>
    <Button onClick={onClose} color="primary">Close</Button>
    <Button onClick={onClose} color="secondary">Log in</Button>
  </DialogActions>
</Dialog>,
    element
  );
}

return null;
  
};

export default Modal


