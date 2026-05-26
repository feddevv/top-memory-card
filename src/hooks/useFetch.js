import { useState, useEffect } from "react"

export function useFetch(url) {
    const [isLoad, setIsLoad] = useState(null)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const doFetch = async () => {
            try {
                setIsLoad(true)
                const response = await fetch(url)
                
                if (!response.ok) {
                    throw new Error(`Error occurred! Status code: ${response.status}.`)
                }
                
                const data = await response.json()
                setData(data)
                setError(null)
            }
            catch (err) {
                setError(err.message)
            }
            finally {
                setIsLoad(false)
            }
        }

        doFetch()
    }, [url])

    return {isLoad, error, data}
}
