import { useEffect, useState } from 'react'
import ItemList from './ItemList'

const TvShowsContainer = () => {
  const [state, setState] = useState({
    shows: [],
    loading: false,
    error: '',
  })
  const { loading, error, shows } = state

  useEffect(() => {
    setState({ ...state, loading: true, error: '' })

    fetch('https://api.tvmaze.com/schedule/web?date=2020-05-29')
      .then(res => res.json())

      .then(data => setState({ ...state, loading: false, shows: data }))

      .catch(error =>
        setState({ ...state, loading: false, error: error.message || error })
      )
  }, [])
  return (
    <div>
      <h1> Tv Shows </h1>

      {loading && <p>Loading...</p>}

      {!loading && shows && <ItemList items={shows} />}

      {!loading && error && <p>{error}</p>}
    </div>
  )
}

export default TvShowsContainer
