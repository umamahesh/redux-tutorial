import {createStore, combineReducers} from 'redux';

var userReducer = function(state={}, action){
	console.log("inside the userReducer", state, action);
	switch(action.type){
		case "SET_NAME":
		  return {...state,
		  	       name: action.name           
		    }
		default:
		    return state;    
	}
}


var itemReducer = function(state=[], action){
	console.log("inside the itemReducer", state, action);
	switch(action.type){
		case "ADD_ITEM": 
		  return [...state,
		  	      action.item
		  ]
		default:
		  return state;
	}
}

var reducer_1 = combineReducers({
	user: userReducer,
	item: itemReducer
});

var store_1 = createStore(reducer_1);
console.log("Its started from here -----");
console.log("after store", store_1.getState());


store_1.dispatch({type: "DO_SOMETHING"});
console.log("after an action", store_1.getState());

var setNameActionCreator = function(name){
	return {
		type: "SET_NAME",
		name: name
	}
}

store_1.dispatch(setNameActionCreator("Uma Mahesh"));
console.log("After action creator", store_1.getState());

store_1.dispatch(setNameActionCreator("Ravali"));
console.log("After action creator", store_1.getState());


