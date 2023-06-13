import axios from 'axios'

export default function network(url, method, data, token) {
  let tokenKey = null;
  if (!data) {
      data = null;
  }

  if (token) {
      tokenKey = token;
  }

  return axios({
    method: method,
    url: url,
    headers: {
    'Authorization': `Bearer ${tokenKey}`,
      'Content-Type': 'application/json',
    }, 
    mode: "no-cors",
    data: data
  })
}