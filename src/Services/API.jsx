import axios from 'axios';

const BASE_URL = "http://localhost:3001/api/v1"

  /**
 * API Log In User
 * @param {String} userName
 *  * @param {String} userPassword
 * @returns {Object}
 */

export const logInUser = (userName, userPwd) => {
  
  return axios.post(BASE_URL + "/user/login", {
      "email": userName,
      "password": userPwd
    })
    .then(response => {
      console.log(response)
      return response.data.body.token;
      
    })
    .catch((error) => {
      console.log(error)
      return "Error";
    })
  }


  /**
 * API post call to get user information
 * @param {String} token 
 * @returns {Object}
 */

export const getUserInfo = (tokenKey) => {  

    return axios.post(BASE_URL + "/user/profile", {
    }, {
      headers: {
        Authorization: "Bearer" + tokenKey
      }
    })
    .then(response => {
      console.log(response)
      let firstName = response.data.body.firstName;
      let lastName = response.data.body.lastName;
      let email = response.data.body.email;
    
      return {firstName, lastName, email};
    })
    .catch((error) => {
      console.log(error)
    })
  }

/**
 * API put  to change user information
 * @param {String} token 
 * @param {String} firstName
 * @param {String} lastName
 * @returns {Object}
 */
  export const updateUser = (tokenKey,firstName, lastName) => {  

    return axios.put(BASE_URL + "/user/profile",  {
      "firstName": firstName,
      "lastName": lastName
      }
    , {
      headers: {
        Authorization: "Bearer" + tokenKey
      }
    })

    .then(response => {
      let firstName = response.data.body.firstName;
      let lastName = response.data.body.lastName;
      return {firstName, lastName};

    })

    .catch((error) => {
      console.log(error)
    })
} 