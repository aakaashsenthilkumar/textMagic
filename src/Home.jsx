import React from 'react'
import { BsMegaphoneFill } from "react-icons/bs";
import Header from './Header'
import Sidebar from './Sidebar'


function Home(){
    return (
        <div>
            
            <main className='main-container'>

                <div className='main-title'>
                <h3>Dasboard</h3>
                </div>

                <div className='main-cards'>

                    <div className='card'>
                        <div className='card-top'>Open Tickets <br/></div>
                        <div className='card-left'>121</div>
                        <div className='card-right'>
                            <span className='bold'>CURRENT MONTH</span> <br/> 25 Less Tickets <br/>
                            <span className='bold'>LAST MONTH</span> <br/>148 Tickets
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-top'>Open Tickets <br/></div>
                        <div className='card-left'>121</div>
                        <div className='card-right'>
                            <span className='bold'>CURRENT MONTH</span> <br/> 25 Less Tickets <br/>
                            <span className='bold'>LAST MONTH</span> <br/>148 Tickets
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-top'>Open Tickets <br/></div>
                        <div className='card-left'>121</div>
                        <div className='card-right'>
                            <span className='bold'>CURRENT MONTH</span> <br/> 25 Less Tickets <br/>
                            <span className='bold'>LAST MONTH</span> <br/>148 Tickets
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-top'>Open Tickets <br/></div>
                        <div className='card-left'>121</div>
                        <div className='card-right'>
                            <span className='bold'>CURRENT MONTH</span> <br/> 25 Less Tickets <br/>
                            <span className='bold'>LAST MONTH</span> <br/>148 Tickets
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-top'>Open Tickets <br/></div>
                        <div className='card-left'>121</div>
                        <div className='card-right'>
                            <span className='bold'>CURRENT MONTH</span> <br/> 25 Less Tickets <br/>
                            <span className='bold'>LAST MONTH</span> <br/>148 Tickets
                        </div>
                    </div>

                </div>

                <div className='views-cards'>

                <div className='views-top'>
                <div className='views-left bold'> Views </div>
                <div className='views-right'> Edit Views</div>
                </div>

                <div className='views-bottom'>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>
                <div className='vcard'>
                <BsMegaphoneFill className='vicon' /> <br/> New Campaign
                </div>

                </div>
                </div>

                <div className='notifs-card'>

                </div>

                <div className='goals-cards'>

                </div>


            </main>

        </div>
        
    )
}

export default Home