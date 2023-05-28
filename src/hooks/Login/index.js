import { useState } from 'react'
import { defaultData, defaultMessage } from './default-data'
import { postLogin } from '../../data/Login/post'
// import { useHistory } from 'react-router-dom'

export const useFetchInitLogin = () => {
  //   const history = useHistory()
  const [data, setData] = useState(defaultData)
  const [message, setMessage] = useState(defaultMessage)
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const login = async e => {
    e.preventDefault()
    const { username, password } = data

    if (!username || !password) {
      setMessage({
        message: 'Faltan campos importantes',
        result: false
      })
      setTimeout(() => {
        setMessage({
          message: '',
          result: false
        })
      }, 2000)
      return
    }

    setLoading(true)
    await postLogin({ data })
      .then(({ token, result, username, nombre }) => {
        if (result) {
          localStorage.clear()
          localStorage.setItem('token', token)
          localStorage.setItem('username', username)
          localStorage.setItem('name', nombre)
          window.location.href = '/neo4six/books'
          //   window.location.href = redirect
          //   setTimeout(() => {
          //     history.push(`/staff/dashboard`)
          //   }, 200)
        }
      })
      .catch(error => {
        if (error) {
          const { message, result } = error.data
          setMessage({
            message: message,
            result: result
          })
        } else {
          setMessage({
            message: 'No hay comunicación con los servicios, verifica tu internet',
            result: false
          })
        }
      })
    setLoading(false)
  }

  return { data, handleInputChange, login, message, loading, showPassword, handleTogglePasswordVisibility }
}
