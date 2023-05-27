import React from "react";

const Footer = () => {
    return (
        <>
            <footer class="footer__container" id="contact">
                <div class="contact__container">
                    <a href="" class="contact__link footer__links"><i class="fa-solid fa-phone"></i>7305489969</a><br></br>
                    <a href="" class="contact__link footer__links"><i class="fa-solid fa-envelope"></i>yugendar2411@gmail.com</a>
                </div>
                <div class="rights__container">
                    <p>copyrights@2023 reserved</p>
                </div>
                <div class="links__container">
                    <a href="" class="footer__links contact__logo"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="" class="footer__links contact__logo"><i class="fa-brands fa-github"></i></a>
                    <a href="" class="footer__links contact__logo"><i class="fa-brands fa-facebook"></i></a>
                    <a href="" class="footer__links contact__logo"><i class="fa-brands fa-square-instagram"></i></a>
                </div>
            </footer>   
        </>
    );
};

export default Footer;