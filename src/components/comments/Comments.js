import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';

const Comments = ({ mark }) => {
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const comments = useSelector(store => store.comments)

    const handleChange = e => {
        setComment(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_COMMENT", payload: {
            id: uuidv4(),
            text: comment,
            // mark: mark
        } })
    }
  
    return (
        <div>
            <h5>{comments?.length}</h5>
    <Grid item xs={12} sm={6}>
            <TextField 
                    name={comment}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
            />
            <Button variant="contained" onClick={handleSubmit}>Add comment</Button>
    </Grid>

        </div>
  )
}

export default Comments
