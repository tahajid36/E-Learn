'use client'
import React, { useEffect, useState } from 'react';
import CourseCard from '../Components/Card';

const Page = () => {
    const [courses, setCourses] = useState([])

    useEffect(()=>{
        fetch('https://elearn-server-sepia.vercel.app/courses')
    .then(res=> res.json())
    .then(data => setCourses(data))
    
    },[courses])
    console.log(courses)
    return (
        <div>
            <div className='w-11/12 mx-auto mt-12 '>
            <h1 className='text-4xl font-extrabold text-center  text-white sm:text-5xl tracking-tight'>All Available Courses_</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pb-8'>
            
                {
                    courses.map(course =>( <CourseCard key={course._id} course={course}></CourseCard>))
                }
                
            </div>
           
           
        </div>
        </div>
    );
};

export default Page;