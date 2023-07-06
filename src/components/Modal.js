import React, { useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, DialogContent, DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Dialog } from '@mui/material';
import Login from './Login';
import Logout from './Logout';

const modalRootElement = document.querySelector("#modal");

const Modal = ({open, onClose, loggedIn, grantAccess, denyAccess}) => {
const element = useMemo(() => document.createElement("div"), []);

useEffect(() => {
  modalRootElement.appendChild(element);

  return () => {
    modalRootElement.removeChild(element)
  }
})

if(open) {
  if (!loggedIn) {
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
    <Button color="primary" onClick={() => grantAccess()}><Login/></Button>
    <Button onClick={onClose} color="primary">Close</Button>
    <Button onClick={onClose} color="secondary">Log in</Button>
  </DialogActions>
</Dialog>,
    element
  )} else {
    return createPortal(
      <Dialog open={open} onClose={onClose}>
        <DialogActions>
          <Button color="primary" onClick={() => denyAccess()}><Logout/></Button>
        </DialogActions>
      </Dialog>,
      element
    )
  };
}
  
};

export default Modal


