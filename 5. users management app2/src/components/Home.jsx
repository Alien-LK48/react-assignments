import React, { useEffect, useState } from 'react'
import Users from './Users'
import useFetch from './UseFetch'
import Search from './Search'
console.clear()
export default function Home() {
    const { data, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/users`)
    console.log(data)
    const [finaldata, setFinaldata] = useState([])
    useEffect(() => {
        data && setFinaldata(data)
    }, [data])
    const idToDelete = (id) => {
        const dataCopy = [...finaldata];
        const indexToRemove = dataCopy.findIndex((user) => user.id === id);
        if (indexToRemove !== -1) {
            dataCopy.splice(indexToRemove, 1);
            setFinaldata(dataCopy);
        }
    }
    const searchdata = (thedata) => {
        const value = thedata.toLowerCase()
        const newvalue = data.filter((data) => {
            const username = data.name.toLowerCase()
            return username.startsWith(value)

        })
        setFinaldata(newvalue)
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Users Management App</h1> <br />
            <Search onSearch={searchdata} /> <br />
            <Users onDeleteID={idToDelete} data={finaldata} loading={loading} error={error} />
        </div>
    )
}
