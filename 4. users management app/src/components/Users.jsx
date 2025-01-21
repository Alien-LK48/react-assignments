import React from 'react'
import User from './User'

export default function Users(props) {
    return (
        <div className='flex flex-wrap gap-[5px] ml-[90px]'>
            {props.data.map((data) => {
                return <User data={data} key={data.id} />
            })}

        </div>
    )
}
