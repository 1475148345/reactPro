export  let reducerIndex=(state={}, action={type:''}) => {
        // return Object.assign({},state,{[action.type]:action[action.type]});
    switch (action.type) {
        case 'myInfo':
            return Object.assign({},state,{myInfo:action.myInfo});
        case 'cityList':
            return Object.assign({},state,{cityList:action.cityList});
        default:
            return state
    }
}
export default reducerIndex;