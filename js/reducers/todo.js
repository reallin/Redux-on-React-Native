import React, {
	ListView
} from 'react-native';
const defaultTodos = [
					
					{text: '等等...'}
				];

  module.exports = function(state,action){
    state = state || {
      type: 'INITIAL_TODOS',
      todos: []
    }
    switch(action.type) {

			case 'LOAD_TODOS': {
				var dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
				dataSource = dataSource.cloneWithRows(defaultTodos);

				return {
					...state,
					...action,
					todos: defaultTodos,
					dataSource,
				}
			}
      case 'APPEND_TODO': {
  			var todos = [ ...state.todos ];
  			todos.unshift(action.todo);
  			dataSource = state.dataSource.cloneWithRows(todos);
  			return {
  				...state,
  				...action,
  				todos,
  				dataSource
  			}
  		}
    }
    return {
  		...state
  	}
  }
