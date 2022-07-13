import React, { useState } from 'react'
// import Chart from 'react-apexcharts';
// import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { BiCheckCircle, BiXCircle,BiCalendar, BiChevronDown, BiChevronRight } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
// import 'react-circular-progressbar/dist/styles.css';
import './Appointment.css'

function Appointment() {
    
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className='container Appointment'>
            <div className='header'>
                <div>
                    <h1 className='heading'>Appointments </h1>
                    <BiChevronRight className='icon' style={{ marginTop: -3}} />
                </div>
                <div>
                    <h2 className='heading-2'>Today</h2>
                    <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
                </div>
            </div>
            <div className='content'>
                <div className="row row-1">
                    <div className="text">
                        <BiCalendar style={{ fontSize: 25, marginTop: -3, color: "#3577D5"}}/>
                        <p>Scheduled</p>
                    </div>
                    <span>51</span>
                </div>  
                <LabelledDivider/>
                <div className="row row-2">
                    <div className="text">
                        <BiCheckCircle style={{ fontSize: 25, marginTop: -3, color: "#2FA94E" }}/>
                        <p>Completed</p>
                    </div>
                    <span>10</span>
                </div>  
                <LabelledDivider/>
                <div className="row row-3">
                    <div className="text">
                        <BiXCircle style={{ fontSize: 25, marginTop: -3, color: "#DA4040"}}/>
                        <p>Cancelled</p>
                    </div>
                    <span>05</span>
                </div>  
            </div>
        </div>
    )
}
export default Appointment;