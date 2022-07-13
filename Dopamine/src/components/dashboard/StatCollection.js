import React from 'react'
import StatCard from './StatCard'
import './StatCollection.css'
import AttendanceChart from "./AttendanceChart";
import IncomeChart from "./IncomeChart";
import PaymentChart from "./PaymentChart";




function StatCollection() {
  return (
    <div className='StatCollection'>
     <StatCard />
     <AttendanceChart />
     <IncomeChart />
     <PaymentChart />
    </div> 
  )
}

export default StatCollection