import {createStore, combineReducers, applyMiddleware} from 'redux';

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


// var reducer_1 = combineReducers({
// 	user: userReducer,
// 	item: itemReducer
// });

// var setNameActionCreator = function(name) {
//   return { type: "SET_NAME", name: name }
// }


// var store_1 = createStore(reducer_1);


// store_1.dispatch(setNameActionCreator("Uma Mahesh"));

// var asyncActionCreator = function(name){
//    return function(dispatch){
//    	setTimeout(function () {
//       dispatch({type: "SET_NAME", name: name})
//    	}, 2000);
//    }
// }

// store_1.dispatch(asyncActionCreator("Uma Mahesh"));

var myownMiddleware = function({dispatch,getState}){
	console.log("inside the first level", dispatch);
	console.log("inside the first level", getState);
	return function(next){
		console.log("inside the second level", next);
		return function(action){
			console.log("inside the third level", action);
			return typeof action === "function" ? 
			  action(dispatch, getState) : 
			  next(action)
		}
	}
}

const finalCreateStore = applyMiddleware(myownMiddleware)(createStore);

var recuder_2 = function(state={}, action){
	return state;
}

var store_2 = finalCreateStore(recuder_2);

var myAsyncActionCreator = function(name){
  return function(dispatch){
  	setTimeout(function(){
      dispatch({type: "SET_NAME", name: name});
  	}, 2000);

  }
}

store_2.dispatch(myAsyncActionCreator("Hi"));




