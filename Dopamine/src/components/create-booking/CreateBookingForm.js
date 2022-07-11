import React, { useRef, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiSearch } from 'react-icons/bi'
import { BiMinus } from 'react-icons/bi'
import { BiPlus } from 'react-icons/bi'
import LabelledDivider from '../mini/LabelledDivider';
import './CreateBookingForm.css';


function CreateBookingForm() {
    
    let quantityRef = useRef(null);

    const [open, setOpen] = useState(true);
    const [quantity, setQuantity] = useState(0);

    function handleOpen() {
        setOpen(!open);
    }

    function handleQuantity(dir){
        if(dir>0){
            quantityRef.current.value = quantity+1;
            setQuantity(quantity+1)
        }else{
            if(quantity <= 0) return;
            quantityRef.current.value = quantity-1;
            setQuantity(quantity-1)
        }
    }

    return (
        <div className="CreateBookingForm">

            <div className='header'>
                <h1 className='heading'>Create Booking</h1>
                <BiChevronDown className='icon' style={{ transform: open ? "rotateX(180deg)" : "rotateX(0deg)" }} onClick={() => { handleOpen() }} />
            </div>

            <div className='content' style={{ display: open ? "block" : "none" }}>

                <LabelledDivider title={"Required"} />

                <div className='form'>

                    <div className='row row-1'>
                        <div className='input-field'>
                            <p className='label'>Customer*</p>
                            <div className='input-box'>
                                <input type="text" />
                                <BiSearch className='icon' />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Requestor Name</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Requestor Phone No</p>
                            <div className='input-box'>
                                <input type="tel" />
                            </div>
                        </div>
                    </div>

                    <div className="row row-2">
                        <div className='input-field'>
                            <p className='label'>Customer Type</p>
                            <div className='input-box'>
                                <div className='option'>
                                    <input type="radio" id="quoted" name="customer_type" value="Quoted" />
                                    <label htmlFor="quoted">Quoted</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="nonquoted" name="customer_type" value="Non-quoted" />
                                    <label htmlFor="nonquoted">Non-quoted</label>
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Order Type</p>
                            <div className='input-box'>
                                <div className='option'>
                                    <input type="radio" id="shipment" name="order_type" value="Shipment" />
                                    <label htmlFor="shipment">Shipment</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="charted" name="order_type" value="Charted" />
                                    <label htmlFor="charted">Charted</label>
                                </div>
                            </div>
                        </div>
                        <div className='input-field'>
                            <p className='label'>Type of Delivery</p>
                            <div className='input-box'>
                                <div className='option'>
                                    <input type="radio" id="single" name="delivery_type" value="Single" />
                                    <label htmlFor="single">Single</label>
                                </div>
                                <div className='option'>
                                    <input type="radio" id="multiple" name="delivery_type" value="Multiple" />
                                    <label htmlFor="multiple">Multiple</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row row-3'>
                        <div className='input-field'>
                            <p className='label'>Type of Trip / Shipment</p>
                            <div className='input-box'>
                                <select defaultValue="default">
                                    <option value="default" disabled hidden>Select One</option>
                                    <option value="palletized">Palletized</option>
                                </select>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Quantity</p>
                            <div className='input-box'>
                                <input type="text" ref={quantityRef} onChange={()=>{setQuantity(parseInt(quantityRef.current.value))}}/>
                                <BiMinus onClick={()=>{handleQuantity(-1)}} className='value-changer'/>
                                <BiPlus onClick={()=>{handleQuantity(1)}} className='value-changer'/>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Payment(Optional)</p>
                            <div className='input-box'>
                                <input type="text" />
                                <select defaultValue="rm" className='add-input'>
                                    <option value="rm">RM</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className='input-field'>
                            <p className='label'>Requestor Email Id</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <LabelledDivider title={"Other Details"} />


                    <div className='row row-4'>
                        <div className='input-field'>
                            <p className='label'>Customer Ref No</p>
                            <div className='input-box'>
                                <input type="text"/>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Booking Date</p>
                            <div className='input-box'>
                                <input type="date"/>
                            </div>
                        </div>

                        <div className='input-field'>
                            <p className='label'>Booking Time</p>
                            <div className='input-box'>
                                <input type="time"/>
                            </div>
                        </div>
                        
                        <div className='input-field'>
                            <p className='label'>Customer ID</p>
                            <div className='input-box'>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CreateBookingForm



//https://codesandbox.io/s/txzui?file=/src/App.js:153-171