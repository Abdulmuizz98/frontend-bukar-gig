import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './CreateUserForm.css';


function CreateUserForm() {
    

    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(!open);
    }

    return (
        <div className="CreateUserForm">

            <div className='header'>
                <h1 className='heading'>Create User</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Personal Details"} />

                <div className='form'>

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>First Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Last Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Employee ID</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="row row-2">
                        <div className='input-field'>
                            <p className='label'>Role</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="physiotherapist">Physiotherapist</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Email Address</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Date of Birth</p>
                            <div className='input-box'>
                                <input type="date" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Mobile Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Work Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>



                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Gender</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Date of Joining</p>
                            <div className='input-box'>
                                <input type="date"/>
                            </div>
                        </div>
                    </div>
                        
                    <LabelledDivider title={"Address Details"} />

                    <div className='row row-5'>
                        <div className='input-field'>
                            <p className='label'>Address Line</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>City</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="chennai">Chennai</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row row-6'>
                        <div className='input-field'>
                            <p className='label'>State</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="tamil-nadu">Tamil Nadu</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Country</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="india">India</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Postal Code</p>
                            <div className='input-box'>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>

                    <LabelledDivider title={"Salary Details"} />

                    <div className='row row-7'>
                        <div className='input-field'>
                            <p className='label'>Basic Pay (&#8377;)</p>
                            <div className='input-box'>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Pay Cycle</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="monthly">Monthly</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Pay Method</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CreateUserForm
