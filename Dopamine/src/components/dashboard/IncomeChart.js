import React from "react";
// import Chart from 'react-apexcharts';
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './IncomeChart.css'

function IncomeChart() {
    const percentage = 80;
    

    return( 
        <div className="container IncomeChart">
          <div className='header'>
              <div>
                  <h1 className='heading'>Income </h1>
                  <BiChevronRight className='icon' style={{ marginTop: -3}} />
              </div>
              <div>
                  <h2 className='heading-2'>Monthly</h2>
                  <BiChevronDown className='icon' style={{ }} />
              </div>
          </div>
          <div className='content chart-container'>
          <CircularProgressbarWithChildren value={percentage} text={`${90}k`}
            styles={{
              pathColor: `rgb(53, 120, 213)`,
              textColor: '#ddd',
              trailColor: '#3578d5',
              backgroundColor: '#fff',
              stroke: '#3578d5'
            }}
          >

            <div style={{ fontSize: 14, marginTop: 325, color: "#7c7c7c"}}>
              <span>March, 22</span> 
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    )
}

export default IncomeChart;