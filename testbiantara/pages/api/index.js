import axios from 'axios'

export const fetchApi = async () => {
  const result = await axios({
    method: 'Get',
    url: 'https://reqres.in/api/users',
  })
  return result
}
