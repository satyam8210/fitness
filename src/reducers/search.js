const initialState = '';

const getSearchElement = (state = initialState,action) => {
        if(action.type == 'search'){
            console.log("hereee-----sasdasd");
            return action.payload
        }
        else{
            console.log("hereee-----");
            return state;
        }
}

export default getSearchElement;