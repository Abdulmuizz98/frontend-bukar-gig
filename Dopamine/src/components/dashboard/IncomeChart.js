import React from "react";
import Chart from 'react-apexcharts'
import './IncomeChart.css'

function IncomeChart() {

  
    return[
       <React.Fragment>
        <div className="container">
        <p className="text-center">Attendance </p>
        <p className="text-center"> monthly</p>
            <div className=" dnt">
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
        
       </React.Fragment>
    ]
}

export default IncomeChart;