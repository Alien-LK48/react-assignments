import React, { useState } from 'react'
import Form from './Form'
import Map from './Map'
export default function Home() {
    const [datas, setData] = useState([])

    const fromdata = (data) => {
        setData((olddata) => {
            return [...olddata, { data }]
        })
        console.log(data)
    }
    return (
        <div>
            <h1 className='text-4xl text-center'>Collect Data from a Form</h1> <br />
            <div className='bg-[#2c2c2c] w-[400px] h-[260px] rounded-lg ml-[480px] p-[20px]'>
                <Form getformdata={fromdata} />
            </div> <br />
            <Map data={datas} />
        </div>
    )
}
