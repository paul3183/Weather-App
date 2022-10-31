import React from 'react';

const Time = () => {
  const hourTime = new Date()

  const hour = hourTime.getHours().toLocaleString()
  const minut = hourTime.getMinutes().toLocaleString()
  const year = hourTime.getFullYear()
  const dayNumber = hourTime.getDate().toLocaleString()


  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  
  const day = weekday[hourTime.getDay()]


  console.log(hourTime, hour, minut, year);

  return (
    <div>
      <p>{ `${hour < 10 ? 0 + hour : hour}` } : { `${minut < 10 ? 0 + minut : minut}`}, {dayNumber} {day} {year}</p>
    </div>
  );
};

export default Time;