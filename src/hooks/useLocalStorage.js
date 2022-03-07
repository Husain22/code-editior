import {useState, useEffect} from 'react'

const PREFIX = "codepen-clone-"

export default function useLocalStorage(key, value) {
const prefixedKey = PREFIX + key

const [val, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if(jsonValue != null) return JSON.parse(jsonValue)

    if(typeof value === 'function') return value()
    return value
})

useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(val))
}, [prefixedKey, val])
  return [val, setValue]
}
