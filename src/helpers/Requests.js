import axios from 'axios';

/**
 *
 * @param {*} username: String, user to be looked
 *
 * @return {object} Returns an object with the user data
 */
export const fetchUsername = async username => {
  const response = await axios.get(
    `/api/auth-fetch/auth-fetch?search=${username}`
  );
  if (response.status === 200) {
    return response.data.msg;
  }
  throw new Error(response.status);
};
