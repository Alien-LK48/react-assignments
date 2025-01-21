import React from 'react'

export default function User(props) {
    const { data, ID } = props
    const { name, id, email, phone, website, address } = data
    const remove = (deletedID) => {
        props.onDeleteID(deletedID)
    }
    return <>
        <div className='w-[250px] h-[250px] bg-[black] text-white p-[10px]'>
            <h1 className='text-2xl text-center'> {id}. {name}</h1><b></b>
            <p>{email}</p>
            <p>Contact: {phone}</p>
            <p>Website: {website}</p>
            <p>Address : {address.suite},{address.street},{address.city}-{address.zipcode}</p>
            <button className='text-[red]' onClick={() => { remove(id) }}>remove this user</button>
        </div>

    </>
}
