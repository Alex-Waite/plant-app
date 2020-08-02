import React from "react"

function Footer () {
    return (
   <footer className="footer alxNavStyle">
        <div className="container">
            <div className="row">
                <div className="col-md-10">
                <span className="footerText">Made by Alexander Waite.</span>
                </div>
                <div className="col-md-2">
                    <span><a className="FASicons" href="https://github.com/Alex-Waite"><i className="fab fa-github-square"></i></a></span>
                    <span><a className="FASicons" href="https://www.facebook.com/profile.php?id=100006221748707"><i className="fab fa-facebook-square"></i></a></span>
                    <span><a className="FASicons" href="https://www.linkedin.com/in/alexander-waite-005165199/"><i className="fab fa-linkedin"></i></a></span>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
    