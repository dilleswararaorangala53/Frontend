import React from 'react';
import './Activities.css';
const Activities2 = () => {
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
          <td>Inaugural and Voters Day</td>
          <td>18-03-24</td>
          <td>Sri Rama Mandire of Gotlam Village</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Poshan Pakwada at Agnavadi Centre – 5</td>
          <td>19-03-24</td>
          <td>Anganvadi Centre-5, BC colony, Gotlam Village</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Health Campaigning</td>
          <td>20-03-24</td>
          <td>Gotlam</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Swatch Bharath, Legal awareness and Celebrated Waters Day</td>
          <td>21-03-24</td>
          <td>Gotlam</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Awareness on Government Schemes</td>
          <td>22-03-24</td>
          <td>Gotlam</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Sanitation</td>
          <td>23-03-24</td>
          <td>Gotlam</td>
        </tr>
        <tr>
          <td>7</td>
          <td>Cultural activities and Valedictory</td>
          <td>22-03-24</td>
          <td>Madhyataragati Kutumbham and Palleturu</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
    </div>
  );
};

export default Activities2;