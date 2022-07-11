import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGrid } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BsTruck } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { ImStack } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbSteeringWheel } from "react-icons/tb";
import { BiShoppingBag } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { HiOutlineCash } from "react-icons/hi";
import { MdAttachMoney } from "react-icons/md";
import "./css/Sidebar.css";

function Sidebar() {
  const [PatientOpen, setPatientOpen] = useState(false);
  const [doctorsOpen, setDoctorsOpen] = useState(false);
  const [leaveOpen, setLeaveOpen] = useState(false);
  const [certificateOpen, setCertificateOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false)

;

  const makeAllFalse = () => {
    setPatientOpen(false);
    setDoctorsOpen(false);
    setLeaveOpen(false);
    setCertificateOpen(false);
    setUserOpen(false);
  };

  const handleClick = (component) => {
    switch (component) {
      case "Patient":
        makeAllFalse();
        setPatientOpen(!PatientOpen);
        break;



      case "doctors":
        makeAllFalse();
        setDoctorsOpen(!doctorsOpen);
        break;
      case "leave":
        makeAllFalse();
        setLeaveOpen(!leaveOpen);
        break;
      case "certificate":
        makeAllFalse();
        setCertificateOpen(!certificateOpen);
        break;
        


      case "user":
        makeAllFalse();
        setUserOpen(!userOpen);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Sidebar">
      <div className="content">
        <div className="item">
          <Link to="/">
            <div className="label">
              <p>
                <BsGrid className="icon" />
                Dashboard
              </p>
            </div>
          </Link>
        </div>
        <div className="item">
          <div
            className="label"
            onClick={() => handleClick("Patient")}
            style={{
              background: PatientOpen ? "var(--blue)" : "inherit",
              color: PatientOpen ? "white" : "inherit",
            }}
          >
            <p>
              <ImStack className="icon" />
              paitent

            </p>
            <IoMdArrowDropdown />
          </div>
          <div
            className="children"
            style={{ display: PatientOpen ? "block" : "none" }}
          >
            <Link to="/create-Patient">
              <p>Create Patient</p>
            </Link>
            <Link to="/pre-Patient">
              <p>Pre-Patient</p>
            </Link>
            <Link to="/manage-Patient">
              <p>Manage Patient</p>
            </Link>
            <Link to="/bulk-Patient">
              <p>Bulk Patient</p>
            </Link>
          </div>
        </div>
        


        <div className="item">
          <div
            className="label"
            onClick={() => handleClick("doctors")}
            style={{
              background: doctorsOpen ? "var(--blue)" : "inherit",
              color: doctorsOpen ? "white" : "inherit",
            }}
          >
            <p>
              <BsShop className="icon" />
              Doctors
            </p>
            <IoMdArrowDropdown />
          </div>
          <div
            className="children"
            style={{ display: doctorsOpen ? "block" : "none" }}
          >
            <Link to="/create-doctors">
              <p>Create Doctor</p>
            </Link>
           
              <p>Vendor List</p>
              <p>Vendor List</p>
              <p>Vendor List</p>
              <p>Vendor List</p>
            
            
          </div>
        </div>



        <div className="item">
          <div
            className="label"
            onClick={() => handleClick("leave")}
            style={{
              background: leaveOpen ? "var(--blue)" : "inherit",
              color: leaveOpen ? "white" : "inherit",
            }}
          >
            <p>
              <BsShop className="icon" />
              Leave Management
            </p>
            <IoMdArrowDropdown />
          </div>
          <div
            className="children"
            style={{ display: leaveOpen ? "block" : "none" }}
          >
            <Link to="/leave-request">
              <p>Leave Requests</p>
            </Link>
           
            <Link to="/leave-history">
              <p>Leave History</p>
            </Link>
              
          </div>
        </div>





        <div className="item">
          <div
            className="label"
            onClick={() => handleClick("certificate")}
            style={{
              background: certificateOpen ? "var(--blue)" : "inherit",
              color: certificateOpen ? "white" : "inherit",
            }}
          >
            <p>
              <BsShop className="icon" />
              Certificate Management
            </p>
            <IoMdArrowDropdown />
          </div>
          <div
            className="children"
            style={{ display: certificateOpen ? "block" : "none" }}
          >
          
              <p>#1</p>
              <p>#2</p>
              
          </div>
        </div>

       

       <div className="item">
          <div
            className="label"
            onClick={() => handleClick("user")}
            style={{
              background: userOpen ? "var(--blue)" : "inherit",
              color: userOpen ? "white" : "inherit",
            }}
          >
            <p>
              <BiUser className="icon" />
              User Management
            </p>
            <IoMdArrowDropdown />
          </div>
          <div
            className="children"
            style={{ display: userOpen ? "block" : "none" }}
          >
              <Link to="/create-user">
              <p>Create User</p>
            </Link>
 
            <Link to="/user-list">
              <p> User List</p>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
