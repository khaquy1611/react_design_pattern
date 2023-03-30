import { useEffect, useState } from 'react'

const WithLoader = (WrappedComponent: any) => {
  return (props: any) => {
    const [initState, setState] = useState<any>({
      loading: true,
      data: null,
      error: null,
    })

    const { loading, data, error } = initState

    useEffect(() => {
      fetch(props.url)
        .then(response => response.json())
        .then(data => {
          setState({
            ...initState,
            loading: false,
            data: data,
          })
        })
        .catch(error => {
          setState({
            ...initState,
            loading: false,
            error: error,
          })
        })
    }, [])
    if (loading) {
      return <div>Loading.....</div>
    } else if (error) {
      return <div>Error: {error.message}</div>
    } else {
      return <WrappedComponent data={data} {...props} />
    }
  }
}

export default WithLoader
