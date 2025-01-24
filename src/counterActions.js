import * as types from './counterTypes';

export const increment = () => ({
  type: types.INCREMENT
});

export const decrement = () => ({
  type: types.DECREMENT
});

export const reset = () => ({
  type: types.RESET
});

export const setStep = (step) => ({
  type: types.SET_STEP,
  payload: step
});

export const clearHistory = () => ({
  type: types.CLEAR_HISTORY
});
