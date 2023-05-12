import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const useFetchGet = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const location = useLocation()

  const page = location.pathname.split('/')[1]
  useEffect(() => {
    ;(async () => {
      try {
        setLoading(true)
        const response = await fetch(`${url}/${page}`)
        const dataResponse = await response.json()
        setData(dataResponse)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    })()
  }, [url, page])

  return { data, loading, error }
}
