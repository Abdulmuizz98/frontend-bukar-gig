import React from "react";
import Chart from 'react-apexcharts'
import './PaymentChart.css'

function PaymentChart() {

    return [

     <React.Fragment>
      
      <div className="container">
        
        <p className="text-center">Attendace </p>
        <p className="text-center"> monthly</p>
          <div className=" dnt">
          <Chart
          type="bar"
      

          series={[
            {name:"social media subscriber",
            data:[64, 63, 32, 12, 34, 32 ,11, 34, 67, 3, 54, 23,  2, 2, 2, 2, 2, 2, 2, 2, ]
          },
          
          ]}

          options={{
            title:{ text:"."},
            style:{fontSize: 10},

            data:{width:2},
          
            xaxis:{
              tickPlacement:"on",
              categories:["March 2", "March 3", "March 4", "March 5", "March 6", "March 7", "March 8", "March 9", "March 10"],
              style:{width:3},
              
            },

            yaxis:{
             labels:{
              formatter:(val)=>{ return '$${val}'},

             }
            }


          }}

          />
      </div>
      </div>

     </React.Fragment>




    ]
     


    
}

export default PaymentChart;