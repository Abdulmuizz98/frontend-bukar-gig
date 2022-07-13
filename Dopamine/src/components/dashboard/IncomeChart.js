import React from "react";
import Chart from 'react-apexcharts'
import './IncomeChart.css'

function IncomeChart() {

    return[
       <React.Fragment>
        <div className="container">
        <p className="text-center">Attendace </p>
        <p className="text-center"> monthly</p>
            <div className=" dnt">
            <Chart
            type="donut"
            width={160}
            height={160}
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
                      offsetY: 10
                    }
                    
                  },
                  grid: {
                    padding: {
                      bottom: -80
                    }
                  },
                  
                  responsive: [{
                    breakpoint: 480,
                    options: {
                      chart: {
                        width: 200
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