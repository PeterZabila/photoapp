import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TextField, Grid } from '@material-ui/core';
import Button from '@mui/material/Button';
import { addComment } from '../../reducers/comments';
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
const Comments = ({ mark }) => {
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const comments = useSelector(store => store.comments)

    const handleChange = e => {
        setComment(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (comment !== '') {
            dispatch(addComment({
                id: uuidv4(),
                text: comment,
            }) 
        )
        setComment('');
        }
        
    }
  
    return (
        <div>
            <h5>Всього {comments.length} {comments.length === 0 && ('коментарів')} {comments.length === 1 && ('коментар')}
            {(comments.length >= 2 && comments.length <= 4) && ('коментарі')} {comments.length > 4 && ('коментарів')}
        </h5>
    <Grid item xs={12} sm={6}>
            <TextField 
                    name={comment}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    fullWidth
                    value={comment}
            />
            <Button variant="contained" onClick={handleSubmit}>Прокоментувати</Button>
    </Grid>
        <ul>
            
        </ul>

        <List component="nav" aria-label="mailbox folders">
        { comments.map(comment => (
            <div>
                <ListItem >
                 <ListItemText primary={comment.text} />

                 </ListItem>
                <Divider />
            </div>
               
            )) }
       
       
        </List>

        </div>
  )
}

export default Comments
