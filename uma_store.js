import {createStore} from 'redux';

var reducer_0 = function(...args){
  console.log('Reducer was called with args', args)	
}
var store_0 = createStore(reducer_0);

var reducer_1 = function(state, action) {
console.log('reducer_1 was called with state', state, 'and action', action)
	if ( typeof state === 'undefined')
       return {};
   else
      state;
}

var store_1 = createStore(reducer_1);

console.log("after the store_1 - ", store_1.getState());


var reducer_2 = function(state={}, action){
  return state;
}

var store_2 = createStore(reducer_2);

console.log("after refactoring", store_2.getState());


var reducer_3 = function(state={}, action){
	switch (action.type) {
      case "SAY_SOMETING":
        return {...state,
                message: action.value
            }
      default:
        return state;      
	}
}

var store_3 = createStore(reducer_3);
console.log("After creating actions management", store_3.getState());




