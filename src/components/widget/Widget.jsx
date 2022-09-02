import React, { useEffect, useState, useRef } from 'react'
import { fakeApiRequest } from '../../services/fakeApi'
import { useTranslation } from '../../hooks/useTranslation'
import Spinner from '../spinner/Spinner'

const Widget = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [currentMessage, setCurrentMessage] = useState('Loading.First')
  const intervalRef = useRef()
  const currentMessageRef = useRef(0)

  const loadingMessages = [
    'Loading.First',
    'Loading.Second',
    'Loading.Third'
  ]
  
  const {t} = useTranslation()
  
  useEffect(() => {
    fakeApiRequest()
    .then(() => {
      setIsLoading(false)
    })
    .catch(() => {
      setIsError(true)
      setIsLoading(false)
    })
  }, [])

  useEffect(() => {
    if (isLoading) {
      intervalRef.current = setInterval(() => {
        setCurrentMessage(loadingMessages[++currentMessageRef.current])
        if (currentMessageRef.current >= loadingMessages.length - 1) {
          clearInterval(intervalRef.current)
        }
      }, 3000)
    } else {
      clearInterval(intervalRef.current)
        isError ? setCurrentMessage('Error.Timeout') : setCurrentMessage('Success.LoadingFinished')
      }
  }, [isLoading])
  
  return (
    <div>Widget
      <div className="spinner">
        {isLoading ? <Spinner /> : null}
      </div>
      <span>{t(currentMessage)}</span>
    </div>
  )
}

export default Widget