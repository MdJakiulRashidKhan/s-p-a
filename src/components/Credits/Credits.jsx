import React from 'react';
import Credit from '../Credit/Credit';

const Credits = ({credits,totalCredit,remainingCredit,totalPrice}) => {
    return (
        <div className='md:w-1/3 ml-4 p-4 space-y-4'>
            <div className='bg-white rounded-xl p-8'>
                <div>
               <h4 className='text-xl  font-bold text-blue-700'>Credit Hour Remaining {remainingCredit}hr</h4>
            </div>
            <h3 className='text-xl font-bold'> Course Name</h3>
            {
                credits.map((credit,idx)=><Credit
                key={idx}  credit={credit} idx={idx}
                ></Credit>)
            }
            <hr />
            <p className='font-bold '>Total Credit Hour : {totalCredit}</p>
            <hr />
            <p className='font-bold'>Total Price : {totalPrice} USD</p>
            </div>
        </div>
    );
};

export default Credits;