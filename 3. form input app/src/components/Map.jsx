import React from 'react'
import Data from './Data'
export default function Map(props) {
    return (
        <div className='flex flex-wrap gap-[50px] ml-[200px]'>
            {props.data.map((data) => {
                return <Data data={data.data} />
            })}
        </div>
    )
}
