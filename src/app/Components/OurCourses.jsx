import React, { useState } from 'react';
import CourseCard from './Card';
const OurCourses = () => {
    const [courses, setCourses] = useState([])

    fetch('https://elearn-server-three.vercel.app/courses')
    .then(res=> res.json())
    .then(data => setCourses(data))
    const courseData = courses.slice(0,4)
    return (
        <div className='w-11/12 mx-auto mt-12 '>
            <h1 className='text-4xl font-extrabold text-center  text-white sm:text-5xl tracking-tight'>Our Courses_</h1>
            <div className='grid grid-cols-4 gap-4 mt-8'>
            
                {
                    courseData.map(course =>( <CourseCard key={course._id} course={course}></CourseCard>))
                }
                
            </div>
            <div className='flex justify-center mt-7'>
            <a href='/courses'
                     
                     className="flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white 
                                bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition duration-300 transform hover:scale-[1.03]"
                 >
                     Explore All Courses_
                     
                 </a>

            </div>
           
        </div>
    );
};

export default OurCourses;