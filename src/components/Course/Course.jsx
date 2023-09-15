import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { BsBook } from 'react-icons/Bs';

const Course = ({course,handleSelect}) => {
    const{cov_img,title,description,price,credit_hr}=course;
    return (
        <div className='bg-white p-5 rounded-xl space-y-4'>
           <img src={cov_img} alt="" />
           <h4 className='text-md font-bold'>{title}</h4> 
           <p>{description}</p>
           <div className='flex justify-between items-center'>
           <FaDollarSign></FaDollarSign>
           <p className='text-slate-600'>Price : {price}</p>
           <BsBook></BsBook>
           <p text-slate-600>Credit : {credit_hr}hr</p>
           
           </div>
           <button onClick={()=>handleSelect(course)} className='text-white py-2 px-12 md:px-16 lg:px-24  bg-blue-800 mx-auto block rounded-xl'>Select</button>
        </div>
    );
};

export default Course;