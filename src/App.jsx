import React, { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Credits from './components/Credits/Credits';

const App = () => {
  const [credits, setCredits] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (course) => {
    const isExist = credits.find((cr) => cr.id === course.id);

    if (isExist) {
      alert('Already Exists');
    } else {
      const newTotalCredit = totalCredit + course.credit_hr;

      if (newTotalCredit <= 20) {
        // If the new total credit is less than or equal to 20, proceed to add the course
        setTotalCredit(newTotalCredit);
        setRemainingCredit(20 - newTotalCredit);
        setCredits([...credits, course]);
        setTotalPrice(totalPrice + course.price);
      } else {
        alert("You can't add more courses. Total credit cann't exceed 20.");
      }
    }
  };

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='flex'>
        <Courses handleSelect={handleSelect}></Courses>
        <Credits
          credits={credits}
          totalCredit={totalCredit}
          remainingCredit={remainingCredit}
          totalPrice={totalPrice}
        ></Credits>
      </div>
    </div>
  );
};

export default App;
