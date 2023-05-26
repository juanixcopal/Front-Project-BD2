import axios from 'axios'

export const postLogin = async ({ data }) => {
  const { username, password } = !!data && data

  return await axios
    .post(process.env.REACT_APP_API_BASE + '/v1/security/login', {
      username,
      password
    })
    .then(({ data }) => {
      return data
    })
    .catch(({ response }) => {
      throw response
    })
}
