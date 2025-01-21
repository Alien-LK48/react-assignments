import React, { useState, useEffect } from 'react'

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const getdata = async (url) => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setLoading(false)
            setError(null)
        }
        catch (err) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getdata(url)
    }, [])
    return { data, loading, error }
}
