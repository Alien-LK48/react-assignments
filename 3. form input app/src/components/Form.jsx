import React from 'react'
import { useFormik } from 'formik';
export default function Form(props) {
    const formik = useFormik({
        initialValues: { title: ``, description: `` },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: { title: ``, description: `` } });
            props.getformdata(values)
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="title" className='text-white font-bold'>title</label> <br />
                <input onChange={formik.handleChange} type="text" name="title" id="" className='w-[360px]' value={formik.values.title} required /> <br />
                <label htmlFor="description" className='text-white font-bold'>description</label> <br />
                <textarea onChange={formik.handleChange} type="text" name="description" id="" className='w-[360px] h-[110px] mb-[10px] p-[5px]' value={formik.values.description} required></textarea > <br />
                <button className='w-[360px] h-[30px] bg-[orange] rounded-lg' type='submit'>send</button>
            </form>
        </div>
    )
}
