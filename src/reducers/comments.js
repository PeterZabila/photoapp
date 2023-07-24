import * as actionType from '../constants/actionTypes';

// const defaultState = {
//     comments: []
// }

// const commentsReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case actionType.ADD_COMMENT:
//       console.log(action.payload)
//       return { ...state, comments: [...state.comments].push(action.payload) };
//     default:
//       return state;
//   }
// };

// export default commentsReducer;


import { createSlice } from "@reduxjs/toolkit";


  const commentsSlice = createSlice({
    name: "comments",
    initialState: [],
    reducers: {
        addComment: {
            reducer: (store, {payload}) => {
                store.push(payload);
            },
            
        },
        removeContact: (store, {payload}) => store.filter(({id}) => id !== payload)
    }
});

export const { addComment, removeContact } = commentsSlice.actions;
export default commentsSlice.reducer;