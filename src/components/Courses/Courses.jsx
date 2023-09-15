import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleSelect}) => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('course.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[]);
    return (
        <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
           {
            courses.map(course =><Course
            id={course.id}
            course={course}
            handleSelect={handleSelect}
            ></Course>)
           }
        </div>
    );
};

export default Courses;