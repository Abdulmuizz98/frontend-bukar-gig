// import { getSuggestedQuery } from "@testing-library/react";
import React, { Component } from "react";
import { BiChevronDown, BiChevronRight } from 'react-icons/bi'
import Chart from 'react-apexcharts'
import './PaymentChart.css'

class PaymentChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      options: {
        chart: {
          // height: 450px,
          // width: 100%,
          // type: 'bar'
          background: '#fff',
          foreColor: '#7c7c7c',
        },
        xaxis: {
          // tickPlacement:"on",
          categories:["Mar 2", "", "", "", "Mar 3", "", "", "", "Mar 4",  "", "", "","Mar 5",  "", "", "", "Mar 6", "", "", "", "Mar 7",
          "", "", "", "Mar 8",  "", "", "", "Mar 9",  "", "", "", "Mar 10",  "", "", "", "Mar 11","", "", ""],
          // style:{width:3},
          
        },
        plotOptions: {
          bar: {
            horizontal: false
          }
        },
        fill: {
          colors: ['#3578d5']
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [{
        name: "Payments",
        data: [64, 63, 32, 12, 34, 32 ,11, 34, 67, 3, 54, 23,  20, 26, 24, 32, 24, 24, 23, 23, 64, 63, 32, 12, 34, 32 ,11, 34, 67, 3, 54, 23,  2, 2, 2, 2, 2, 2, 2, 2 ]
      }]
    }
  }

  render() {

    return (
      // <React.Fragment>
        <div className="container PaymentChart">
            <div className='header'>
                <div>
                    <h1 className='heading'>Payments </h1>
                    <BiChevronRight className='icon' style={{ marginTop: -3}} />
                </div>
                <div>
                    <h2 className='heading-2'>Weekly</h2>
                    <BiChevronDown className='icon' style={{ }} />
                </div>
            </div>

          <div className="content chart-container">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="100%"
                height="250"
              />
          </div>
        </div>
    //  </React.Fragment>
    )}

}
export default PaymentChart;