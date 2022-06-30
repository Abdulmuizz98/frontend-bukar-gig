import React from 'react'
import './css/CreateDriver.css'
import CreateDriverForm from '../../components/create-driver/CreateDriverForm'
import Permissions from '../../components/create-driver/Permissions'
import UserPassword from '../../components/create-driver/UserPassword'
import PaymentDetails from '../../components/create-driver/PaymentDetails'
import AddressDetails from '../../components/create-driver/AddressDetails'

function CreateDriver() {
    return (
        <div className="CreateDriver">
            <CreateDriverForm/>
            <PaymentDetails/>
            <AddressDetails/>
            <Permissions/>
            <UserPassword/>
        </div>
    )
}
export default CreateDriver