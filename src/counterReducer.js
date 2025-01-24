import * as types from './counterTypes';

const initialState = {
  count: 0,
  step: 1,
  history: [],
  maxCount: 10,
  minCount: -10
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      const newIncrementCount = state.count + state.step;
      return {
        ...state,
        count: newIncrementCount > state.maxCount 
          ? state.maxCount 
          : newIncrementCount,
        history: [...state.history, { 
          action: 'INCREMENT', 
          value: newIncrementCount,
          timestamp: new Date().toISOString()
        }]
      };
    
    case types.DECREMENT:
      const newDecrementCount = state.count - state.step;
      return {
        ...state,
        count: newDecrementCount < state.minCount 
          ? state.minCount 
          : newDecrementCount,
        history: [...state.history, { 
          action: 'DECREMENT', 
          value: newDecrementCount,
          timestamp: new Date().toISOString()
        }]
      };
    
    case types.RESET:
      return {
        ...state,
        count: 0,
        history: [...state.history, { 
          action: 'RESET', 
          value: 0,
          timestamp: new Date().toISOString()
        }]
      };
    
    case types.SET_STEP:
      return { ...state, step: action.payload };
    
    case types.CLEAR_HISTORY:
      return { ...state, history: [] };
    
    default:
      return state;
  }
};

export default counterReducer;
