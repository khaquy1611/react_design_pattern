import { useEffect, useState } from 'react'

const useListings = () => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setListings(data))
  }, [])
  return listings
}

export default useListings
