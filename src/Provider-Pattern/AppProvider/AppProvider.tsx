import { ReactNode, useEffect, useMemo, useState } from 'react'
import { getLocalByCode, getLocaleCode } from '../data'
import { AppContext } from '../AppContext'

interface Props {
  children: ReactNode
}
const AppProvider = ({ children }: Props) => {
  const [state, setState] = useState({
    localeCodes: [],
    localeObj: null,
    theme: 'light',
  })

  const updateLocalCode = async (e: { target: { value: string } }) => {
    try {
      const localeObj: any = await getLocalByCode(e.target.value)
      console.log('newlocaleObj', localeObj)
      setState({ ...state, localeObj })
    } catch (err) {
      return err
    }
  }

  const updateTheme = (e: { target: { checked: boolean } }) => {
    setState({ ...state, theme: e.target.checked ? 'dark' : 'light' })
  }
  const fetchData = async () => {
    try {
      const localeCodes: any = await getLocaleCode()
      const localeObj: any = await getLocalByCode()
      console.log('localeCodes', localeCodes)
      console.log('localeObj', localeObj)

      setState({ ...state, localeCodes, localeObj })
    } catch (err) {
      return err
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const value = useMemo(() => {
    return {
      state,
      updateLocalCode,
      updateTheme,
    }
  }, [state])
  return (
    <AppContext.Provider value={value}>
      <div className={state.theme}>{children}</div>
    </AppContext.Provider>
  )
}

export default AppProvider
