import React, { useEffect, useState } from 'react'

export default function User(props) {
    const [users, setUsers] = useState(props.data)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        fetch(props.data)
            .then((response) => {
                if (!response.ok) {
                    throw Error(`error to get data`)
                }
                else {
                    return response.json()
                }
            })
            .then((data) => {
                setUsers(data)
                setLoading(!loading)
                setError(false)
            })
            .catch((err) => {
                console.log(err)
                setLoading(!loading)
            })
    }, [props.data])
    return (

        <div className='w-[225px] h-[120px] bg-[#2c2c2c] p-[10px] rounded-lg'>
            {loading &&
                <p className='text-[green]'>data is loading</p>
            }

            {error && <p>{error}</p>}
            <div>
                <h1 className='text-white'>{users.id}</h1>
                <h1 className='text-[yellow] '>{users.name}</h1>
                <p className='text-white'>{users.email}</p>
                <p className='text-white'>{users.phone}</p>
            </div>



        </div>
    )
}
