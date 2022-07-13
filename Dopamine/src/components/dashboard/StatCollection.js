import React from 'react'
import StatCard from './StatCard'
import './StatCollection.css'
import AttendanceChart from "./AttendanceChart";
import IncomeChart from "./IncomeChart";
import PaymentChart from "./PaymentChart";
import Appointment from './Appointment';




function StatCollection() {
  return (
    <div className='StatCollection'>
     <StatCard />
     <AttendanceChart />
     <IncomeChart />
     <PaymentChart />
     <Appointment/>
    </div>
  )
}

export default StatCollection