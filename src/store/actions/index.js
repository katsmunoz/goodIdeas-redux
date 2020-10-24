import * as actionTypes from './actionTypes';

//add todo
export const addItem = () => {
    return{ 
        type: actionTypes.ADD_ITEM, 
    }
};

//delete todo
export const deleteItem = (item) => {
    return{ 
        type: actionTypes.DELETE_ITEM, 
        item: item 
    }
};

//edit todo
export const editItem = (item) => {
    return{ 
        type: actionTypes.EDIT_ITEM, 
        item: item 
    }
};

//title is stored in the state
export const setTitle = (title) => {
    return{ 
        type: actionTypes.SET_TITLE, 
        title: title 
    }
};

//error message
export const setError = (error) => {
    return{ 
        type: actionTypes.SET_ERROR, 
        error: error 
    }
};

//true if its clicked, stores the todo to the state
export const setItem = (item) => {
    return{ 
        type: actionTypes.SET_ITEM, 
        item: item 
    }
};

//true if edit item is clicked
export const setEdit = () => {
    return{ 
        type: actionTypes.SET_EDIT
    }
}
