import { useState, useEffect } from 'react'
// import paginate from './utils'
// const url = 'http://localhost:4000/news'
const url = 'http://103.153.68.242:4000/news'

export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getNews = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setData(data)
    setLoading(false)
    // const dataNew = data.filter((item) => item.type === type)
    // ('dataNew:', dataNew)
    // if (type === 'all') {
    //   setData(paginate(data))
    // } else {
    //   setData(paginate(dataNew))
    // }
  }

  useEffect(() => {
    getNews()
  }, [])
  return { loading, data }
}
