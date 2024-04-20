import React from 'react';
import './Activities.css';
const Activities1 = () => {
  return (
    <div className='activities-table'>
    <table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Activity</th>
          <th>Date</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
        {/* Add rows of activities here */}
        <tr>
          <td>1</td>
          <td>Activity 1</td>
          <td>2024-04-07</td>
          <td>Location 1</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Activity 2</td>
          <td>2024-04-08</td>
          <td>Location 2</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
  );
};

export default Activities1;
