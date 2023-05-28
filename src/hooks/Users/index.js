import { useState } from 'react'
import { useFetchActiveUsers } from './fetch-data'
import { defaultDataModal, defaultData } from './default-data'
import { useActions } from './actions.js'

export const useFetchInitUsers = () => {
  const [data, setData] = useState(defaultData)
  const [dataModal, setDataModal] = useState(defaultDataModal)
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({})

  const toggle = (_, title, component, params) => {
    setDataModal({
      ...dataModal,
      open: !dataModal.open,
      title,
      component,
      params
    })
  }

  const handleInputChange = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const handleTogglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword)
  }

  const handleChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const FetchActiveUsers = useFetchActiveUsers()
  const Actions = useActions({ data, dataModal, toggle, FetchActiveUsers, formValues })

  return {
    FetchActiveUsers,
    toggle,
    dataModal,
    handleInputChange,
    data,
    showPassword,
    handleTogglePasswordVisibility,
    Actions,
    handleChange
  }
}
