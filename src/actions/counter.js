export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
import api from '../api/api';

export const increment = () => ({
  type: INCREMENT_COUNTER,
});


export const decrement = () => ({
  type: DECREMENT_COUNTER,
});


export const incrementIfOdd = () =>
  (dispatch, getState) => {
    const { counter } = getState();
    api.getUser()
    .then((res)=> {
      console.log('res is ', res);
    });
    dispatch(increment());
  };


export const incrementAsync = (delay = 1000) =>
  dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
