import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import './AssignTruckDriver.css'
import LabelledDivider from '../mini/LabelledDivider'

function AssignTruckDriver() {

    const [open, setOpen] = useState(true);
    const [vendorActive, setVendor] = useState(true);
    const [ownActive, setOwn] = useState(false);

    function handleOpen() {
        setOpen(!open);
    }

    function handleClick(option) {
        switch(option){
            case 'vendor':
                setOwn(false)
                setVendor(true)
                break;
            case 'own':
                setVendor(false)
                setOwn(true)
                break;
            default:
                break;
        }
    }

    return (
        <div className='AssignTruckDriver'>
            <div className='header'>
                <div className='heading'>
                    <h1>Assign Truck & Driver</h1>
                    <div className='mode-of-truck'>
                        <p onClick={()=>{handleClick('own')}} className={ownActive ? 'active' : ''}>Own Truck</p>
                        <p onClick={()=>{handleClick('vendor')}} className={vendorActive ? 'active' : ''}>Vendor Truck</p>
                    </div>
                </div>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <div className='form own-truck' style={{ display: ownActive ? "block" : "none" }}>

                    <LabelledDivider title={"Required"} />

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Truck Name</p>
                            <div className='input-box'>
                                <input type="text" />
                                <BiSearch className='icon' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Primary Email ID</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Driver Name</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="john">John</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Truck Number</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="MH 010204">MH 010204</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Truck Tonnage</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="1">1 Ton</option>
                                    <option value="2">2 Ton</option>
                                    <option value="3">3 Ton</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>I/C Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>H/P Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Agreed Price</p>
                            <div className='input-box'>
                                <input type="text" />
                                <select defaultValue="rm" className='add-input'>
                                    <option value="rm">RM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <LabelledDivider title={"Other Details"} />

                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Remarks</p>
                            <div className='input-box'>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='form vendor-truck' style={{ display: vendorActive ? "block" : "none" }}>

                    <LabelledDivider title={"Required"} />

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Vendor Name</p>
                            <div className='input-box'>
                                <input type="text" />
                                <BiSearch className='icon' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Primary Email ID</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className='row row-2'>
                        <div className='input-field'>
                            <p className='label'>Driver Name</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="john">John</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Truck Number</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="MH 010204">MH 010204</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Truck Tonnage</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="1">1 Ton</option>
                                    <option value="2">2 Ton</option>
                                    <option value="3">3 Ton</option>
                                </select>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>I/C Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>H/P Number</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Agreed Price</p>
                            <div className='input-box'>
                                <input type="text" />
                                <select defaultValue="rm" className='add-input'>
                                    <option value="rm">RM</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <LabelledDivider title={"Other Details"} />

                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Remarks</p>
                            <div className='input-box'>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AssignTruckDriver