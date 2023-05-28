import { useState, useEffect } from 'react'
import { getActiveUsers } from '../../data/Users/get.js'

export const useFetchActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([])
  const [loadingActiveUsers, setLoadingActiveUsers] = useState(false)

  const _getActiveUsers = async () => {
    setLoadingActiveUsers(true)
    await getActiveUsers()
      .then(({ data }) => {
        setActiveUsers(data)
      })
      .catch(({ response }) => {
        if (response.status === 401) {
          localStorage.clear()
          window.location.reload()
        }
        console.log('Error fetch-data armarios', response)
      })
    setLoadingActiveUsers(false)
  }

  useEffect(() => {
    _getActiveUsers()
  }, [])

  return { activeUsers, loadingActiveUsers, _getActiveUsers }
}
