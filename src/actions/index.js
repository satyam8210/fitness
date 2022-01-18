export const searchElement = (searchElem) => {
    return (dispatch) => {
        dispatch({
            type : 'search',
            payload : searchElem
            
        })
    }
}