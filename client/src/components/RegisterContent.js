import React, { useState } from "react"
import API from "../utils/API"

function RegisterContent() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function submitValues (event) {
        event.preventDefault();
        var userData = {
            username: username,
            email: email,
            password: password
        }

        if (!userData.email || !userData.password) {
            return;
          }

        console.log(userData)
        API.createUser(userData.username, userData.email, userData.password)
        
    }



    return (
        <div className="container sepparatorDiv">
            <div className="titleTextContainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mainBannerText">Create An Account.</h1>
                        <form class="signup" onSubmit={submitValues}>
                            <div class="form-group alxFormGroup">
                              <label for="exampleInputUser1" className="alxFormHeader">Username</label>
                              <input type="username" class="form-control alxFormInput" id="username-input" placeholder="Username" value={username} onChange={event => setUsername(event.target.value)}/>
                            </div>
                            <div class="form-group alxFormGroup">
                              <label for="exampleInputEmail1" className="alxFormHeader">Email address</label>
                              <input type="email" class="form-control alxFormInput" id="email-input" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}/>
                            </div>
                            <div class="form-group alxFormGroup">
                              <label for="exampleInputPassword1" className="alxFormHeader">Password</label>
                              <input type="password" class="form-control alxFormInput" id="password-input" placeholder="Password" value={password} onChange={event => setPassword(event.target.value)}/>
                            </div>
                            <div id="alert" class="alert alert-danger alertyBoy" role="alert">
                                <h1>One or more fields are empty!</h1>
                            </div>
                            <i class="fab fa-envira LeafLogo"></i>
                            <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <button type="submit" class="btn btn-primary alxCustomBtn">Sign Up</button>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <button class="btn btn-danger alxCustomBtn"><a className="aNoBlue" href="/signin">Already a user? Sign in!</a></button>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterContent