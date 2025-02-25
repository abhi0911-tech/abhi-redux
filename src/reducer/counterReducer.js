const intialstate={
    count: 0
}

const counterReducer = (state=intialstate,action) => {
    switch(action.type){
        case "Increment":
            return{
                ...state,
                count:state.count + 1
            };
            case "Decrement":
                return{
                    ...state,
                    count:state.count - 1
                };
                case "reset":
                    return{
                        ...state,
                        count: 0
                    }
    }
    
  
}

export default counterReducer;
