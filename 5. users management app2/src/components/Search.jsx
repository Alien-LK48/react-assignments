import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const[searchname, setSearchname] = useState(``)
    const findname = (e) => {
        setSearchname(e.target.value)
    }
    useEffect(()=>{
        props.onSearch(searchname)
    },[searchname])
    return (
        <div>
            <input type="text" value={searchname} className='border-2 border-[black] w-[480px] ml-[450px]' onChange={findname} />
        </div>
    )
}
