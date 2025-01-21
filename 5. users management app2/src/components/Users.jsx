import React, { useState } from 'react'

import User from './User'
import { v4 as uuidv4 } from 'uuid';
export default function Users({ error, loading, data, onDeleteID }) {

    return (
        <div className='flex flex-wrap gap-[5px]'>
            {loading && (<p>data is loading</p>)}
            {error && (<p>{error}</p>)}
            {data.map((data) => {
                const newdata = { data, id: uuidv4() }
                return <User {...newdata} key={newdata.id} ID={newdata.id} onDeleteID={onDeleteID} />
            })}
        </div>
    )
}
