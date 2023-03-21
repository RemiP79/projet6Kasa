import React from 'react';
import LogoFooter from '../assets/img/LOGO.png';
import "./styles/footer.css";


function Footer() {
    return (
    <footer id="footer">
        <img id="logofooter" src={LogoFooter} alt="Logo Kasa" />
        <p className="pFooter">&copy; 2020 Kasa. All Rights Reserved</p>
    </footer>
    )
}
export default Footer