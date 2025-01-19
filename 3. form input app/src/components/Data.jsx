import React from 'react'

export default function Data(props) {
    return (
        <div className='w-[450px] bg-[#2c2c2c] p-[20px] rounded-lg'>
            <h1 className='text-3xl text-center text-white'>{props.data.title}</h1>
            <h1 className='text-lg text-justify text-white'>{props.data.description}</h1>
        </div>
    )
}
