import React from 'react'
import "../../styles/CalanderBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Calendar from 'react-calendar';


const CalanderBar = () => {
  return (
      <div className='calanderBar'>
      <div className='calander'>
      <Calendar />
      </div>
    </div>
  )
}

export default CalanderBar
