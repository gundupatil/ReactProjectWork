import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
      console.log(userData);
    return axios.post('http://localhost:3000/api/users', userData);
    
  }
}
