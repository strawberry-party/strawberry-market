import { createStore } from 'redux';

var initState = {
    
}

function reducer(state = initState, action){
    var newState, newMyRooms;
    // if (action.type === 'create') {
    //     var currentMaxId = state.rooms.length;
    //     var newId = currentMaxId + 1;
    //     var post = { id: newId, title: action.title, price: action.price, dest: action.dest, desc: action.desc, joinedUsers: [state.userId], maxNum: action.maxNum };
    //     console.log(post);
    //     var newRooms = [...state.rooms, room];
    //     newMyRooms = [...state.myRooms, room]
    //     newState = { ...state, mode: 'home', rooms: newRooms, maxId: newId, myRooms: newMyRooms };
    //     return newState;
    // }
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());