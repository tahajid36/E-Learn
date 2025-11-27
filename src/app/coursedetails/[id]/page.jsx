import React from 'react';
import CourseDetail from '@/app/Components/CourseDetail';
const page = async({params}) => {
    const {id} = await params


    console.log(id)
    const res = await fetch(`https://elearn-server-sepia.vercel.app/courses/${id}`)
    const data = await res.json()
    return <CourseDetail data={data}></CourseDetail>
};

export default page;