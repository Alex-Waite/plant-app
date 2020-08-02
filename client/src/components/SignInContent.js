import React from "react"

function SignInContent() {
    return (
        <div className="container sepparatorDiv">
            <div className="titleTextContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mainBannerText">Log in to an account!</h1>
                        <form class="login">
                          <div class="form-group">
                            <label for="exampleInputEmail1" className="alxFormHeader">Email address</label>
                            <input type="email" class="form-control alxFormInput" id="email-input" placeholder="Email" />
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1" className="alxFormHeader">Password</label>
                            <input type="password" class="form-control alxFormInput" id="password-input" placeholder="Password" />
                          </div>
                          <i class="fab fa-envira LeafLogo"></i>
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <button type="submit" class="btn btn-primary alxCustomBtn">Sign in</button>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <button type="submit" class="btn btn-danger alxCustomBtn"><a className="aNoBlue" href="/signin">New? Create an account!</a></button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInContent