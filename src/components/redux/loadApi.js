import axios from 'axios';

// Actions
export const LOAD_DATA = 'LOAD_DATA';

const data = [];
// reducer
export default function loadDataReducer(state = data, action) {
  switch (action.type) {
    case LOAD_DATA: {
      return action.payload;
    }

    default:
      return state;
  }
}

// Action Creators
export const fetchAction = (payload) => ({
  type: LOAD_DATA,
  payload,
});

/* eslint-disable camelcase */

// covid api
const url = 'https://covidnigeria.herokuapp.com/api';

// fetch data from covid api
export const fetchLoadedData = () => async (dispatch) => {
  const response = await axios.get(url);
  const { data } = response.data;
  dispatch(fetchAction(data));
};