import React from 'react'
import Clock from 'react-live-clock';
import './Time.css';
import { Image } from 'react-bootstrap';



function Time() {
    return (
        <div className='clock_box'>    
        {/* <Image className="clock_image" src="https://i.ibb.co/dc02SJJ/623867-clock-256x256.png"/> */}
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={' '}/>
            <h5 className="title">Local</h5>
        </div>
        
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'}/>
            <h5 className="title">Home</h5>
        </div>
        </div>
    )
}

export default Time
