import React from "react";
import Chart from 'react-apexcharts';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './AttendanceChart.css'

function AttendanceChart() {
    const percentage = 80;
    

    return[
       <React.Fragment>
        <div className="container">
          <CircularProgressbarWithChildren value={percentage} text={`${90}k`}
            styles={{
              pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
              textColor: '#ddd',
              trailColor: '#000080',
              backgroundColor: '#3e98c7',
            }}
          >

            <div style={{ fontSize: 14, marginTop: 325 }}>
              <strong>March, 22</strong> 
            </div>
          </CircularProgressbarWithChildren>

        </div>
       </React.Fragment>
    ]
}

export default AttendanceChart;