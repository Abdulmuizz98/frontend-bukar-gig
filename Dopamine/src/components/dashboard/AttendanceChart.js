import React from "react";
import Chart from 'react-apexcharts'
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import './AttendanceChart.css'

function AttendanceChart() {

  
    return(
      <div className=" AttendanceChart container">
          <div className='header'>
              <div>
                  <h1 className='heading'>Attendance</h1>
                  <BiChevronRight className='icon' style={{ marginTop: -3}} />
              </div>
              <div>
                  <h2 className='heading-2'>Monthly</h2>
                  <BiChevronDown className='icon' style={{ }} />
              </div>
          </div>
          <div className='content chart-container'>
            <Chart
            type="donut"
            width={300}
            height={300}
            series={[84,16 ]}
            
             
            options={{
                 
                labels:['gold','diamond'],
                plotOptions: {
                    pie: {
                        expandOnClick: false,
                        donut: {
                     labels: {
                     show: true,
                     total: {
                     show: true,
                     label: '',
                     formatter: () => 'Text you want'
                     }
                     }
                     },
                      startAngle: -110,
                      endAngle: 110,
                      offsetY: 50,
                      offsetX: 40
                    }
                    
                  },
                  grid: {
                    padding: {
                      // bottom: -50
                    }
                  },
                  
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 700
                      },
                      legend: {
                        position: 'bottom'
                      }
                    }
                  }],
            }}
            />
          </div>
      </div>
    )
}

export default AttendanceChart;