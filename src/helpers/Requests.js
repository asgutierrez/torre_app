import axios from 'axios';
import json from '../helpers/mock.json';

/**
 *
 * @param {*} username: String, user to be looked
 *
 * @return {object} Returns an object with the user data
 */
export const fetchUsername = async username => {
  // const proxyurl = 'https://thingproxy.freeboard.io/fetch/';
  // const url = `https://torre.bio/api/bios/${username}`; // site that doesn’t send Access-Control-*

  const response = await axios.get('/api/auth-fetch/auth-fetch');
  console.log(response);
  if (response.status === 200) {
    return json;
  }
  throw new Error(response.status);
};
