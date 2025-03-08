import {useEffect, useState} from 'react'


const useCountdown = (countdownInSeconds: number) => {
  const [counter, setCounter] = useState(countdownInSeconds)

  useEffect(() => {
    if (counter === 0) return
    const id = setInterval(() => setCounter(counter => counter - 1), 1000)
    return () => clearInterval(id)
  }, [counter])

  return counter
}

export default useCountdown