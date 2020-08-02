import React from "react"

function MainPageContent() {
    return (
            <div className="container sepparatorDiv">
                <div className="titleTextContainer">
                    <div className="row">

                        <div className="col-md-12">
                            <h1 className="mainBannerText">Welcome to Eleanor.</h1>
                        </div>

                        <div className ="col-md-12">
                            <h4 className="introTextContentTitle">What is this app?</h4>
                        </div>
                        <div className ="col-md-12">
                            <p className="introTextContentBody">This app can be used for users who are new to agriculture or growing plants to figure out what plants are a good choice for them specifically to grow based on their location.</p>
                        </div>

                        <div className ="col-md-12">
                            <h4 className="introTextContentTitle">How does it work?</h4>
                        </div>

                        <div className ="col-md-12">
                            <p className="introTextContentBody">The app works by taking in a user's vague location (gathered upon account creation) and using API's to discover more about things such as the climate, rainfall, humidity, etc and compare that information to data on the specific requirements for plant growth so that the user can decide which plants may be best for them based on the climate in their area.</p>
                        </div>
                        <div className ="col-md-12">
                            <h4 className="introTextContentTitle">Who are we?</h4>
                        </div>
                        <div className ="col-md-12">
                            <p className="introTextContentBody">This app was created solo by Alexander Waite, I am a student in the University of Adelaide's coding boot camp. My personal reason for creating the app is to test and demonstrate my skills in Full Stack Development.</p>
                        </div>
                        <div className="col-md-12">
                            <i class="fab fa-envira LeafLogo"></i>
                        </div>
                        <div className="col-md-12">
                        <a href="/register"><button type="button" class="btn btn-outline-success btn-lg alxCustomBtn">Get Started!</button></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MainPageContent