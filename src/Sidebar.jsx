import React from 'react'
import { MdDashboard } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { BsMegaphoneFill } from "react-icons/bs";
import { IoMdPeople } from "react-icons/io";
import { FaClipboardCheck } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { TiSpanner } from "react-icons/ti";
import { FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";


function Sidebar(){

    return (
        <aside id="sidebar" className='sidebar-responsive'>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/">
                            <MdDashboard className='icon'/> Dashboard
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Messenger">
                            <LuMessagesSquare className='icon'/> Messenger
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMegaphoneFill className='icon'/> Campaigns
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoMdPeople className='icon'/> Contacts
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <FaClipboardCheck className='icon'/> Tasks
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <IoIosPricetags className='icon'/> Deals
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <TiSpanner className='icon'/> Services
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <FaChartPie className='icon'/> Reporting
                    </a>
                </li>
            </ul>
            <ul className='sidebar-bottom'>

            </ul>
        </aside>
    )
}

export default Sidebar