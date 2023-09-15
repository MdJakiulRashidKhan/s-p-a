import React from 'react';

const Credit = ({ credit,idx }) => {
    const { title } = credit;
    return (
        <div className='p-2 my-1'>
                <p>{idx+1}. {title}</p>
        </div>
    );
};

export default Credit;
