import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './CreateDoctorForm.css';


function CreateDoctorForm() {

    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className="CreateDoctorForm">

            <div className='header'>
                <h1 className='heading'>Create Vendor</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <div className='form'>

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Business Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Vendor ID</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CreateDoctorForm