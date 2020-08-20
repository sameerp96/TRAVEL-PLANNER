import React from 'react';
import './Footer.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="footer">

            <div className="socialmedia_icons">
            <FacebookIcon color="action" style={{ fontSize: 55 }}/>
            <InstagramIcon color="action" style={{ fontSize: 55 }}/>
            <LinkedInIcon color="action" style={{ fontSize: 55 }}/>
            </div>

            <div className="copyright_text">
                <p>© 2020 TRAVELPLANNER PVT. LTD.</p>
                <p>Country UK USA UAE INDIA</p>
            </div>
            
        </div>
    )
}

export default Footer
