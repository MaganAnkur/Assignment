const INITIAL_STATE = {};

const restaurantListReducer =(state = INITIAL_STATE, action)=>{
    switch(action.type){
        case "FETCH_RESTAURANTS":
            return action.payload;
        default:
            return state;
    }
}

export default restaurantListReducer;