import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className = "main-footer">
            <div className = "container">
                <div className = "row">
                    {/*Column1*/}
                    <div className="col">
                        <h4>Opening Times</h4>
                        <ul className="list-unstyled">
                            <li>Monday - Friday: 9am - 9pm</li>
                            <li>Saturday: 9am - 11pm</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                    {/*Column2*/}
                    <div className="col">
                        <h4>About Us</h4>
                        <ul className="list-unstyled">
                            <li>IMAX</li>
                            <li>Careers</li>
                            <li>Story</li>
                        </ul>
                    </div>
                    {/*Column3*/}
                    <div className="col">
                        <h4>Legal</h4>
                        <ul className="list-unstyled">
                            <li>Terms and Conditions</li>
                            <li>Data Protection Act</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    {/*Column4*/}
                <div className="col">
                        <h4>Social</h4>
                        <ul className="list-unstyled">
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Footer;