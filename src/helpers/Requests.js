import axios from 'axios';

export const fetchUsername = async username => {
  const response = await axios.get(`https://torre.bio/api/bios/${username}`, {
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  console.info(response);
  return response;
};
