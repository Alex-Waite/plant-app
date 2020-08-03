import React from "react"

function SignInContent() {
    return (
    <div className="customShopBanner">
        <div className="titleTextContainer">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mainBannerText">~~~~~~Browse for plants!~~~~~~</h1>
                    <div class="form-group alxFormGroup">
                        <label for="exampleInputUser1" className="alxFormHeader">Search the database!</label>
                        <input type="username" class="form-control alxFormInput" id="username-input" placeholder="Look for a plant!" />
                    </div>
                    <div className="row">
                    <div class="col-md-3">
                        <div class="card border-dark m-2">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqRXEhrRWmKOlIU0hWwkUZmMl47Fbx6hJMxQ&usqp=CAU" class="card-img-top" alt="Grapes on a vine" />
                          <div class="card-body">
                            <h5 class="card-title" >Common Name: Bush Cactus</h5>
                            <p><strong>Scientific Name: Spiky Boi</strong></p>
                            <p class="card-text"><strong>Growth Temprature: 25c ~ 78c</strong></p>
                            <p class="card-text">Kingdom: Cactus kingdom</p>
                            <a href="/"><button class="btn btn-success winery-btn" id="enter-winery-btn">Buy this plant!</button></a>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card border-dark m-2">
                          <img src="https://images.wallpaperscraft.com/image/corn_field_summer_124670_1920x1080.jpg" class="card-img-top" alt="Grapes on a vine" />
                          <div class="card-body">
                            <h5 class="card-title" >Common Name: Corn</h5>
                            <p><strong>Scientific Name: Yelloeatplant</strong></p>
                            <p class="card-text"><strong>Growth Temprature: 3c ~ 41c</strong></p>
                            <p class="card-text">Kingdom: Corn kingdom</p>
                            <a href="/"><button class="btn btn-success winery-btn" id="enter-winery-btn">Buy this plant!</button></a>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card border-dark m-2">
                          <img src="https://wallpaperplay.com/walls/full/c/3/d/371979.jpg" class="card-img-top" alt="Grapes on a vine" />
                          <div class="card-body">
                            <h5 class="card-title" >Common Name: Willow Tree</h5>
                            <p><strong>Scientific Name: Willowcus Largeus</strong></p>
                            <p class="card-text"><strong>Growth Temprature: -3c ~ 61c</strong></p>
                            <p class="card-text">Kingdom: Big Tree kingdom</p>
                            <a href="/"><button class="btn btn-success winery-btn" id="enter-winery-btn">Buy this plant!</button></a>
                          </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="card border-dark m-2">
                          <img src="https://www.wallpapers4u.org/wp-content/uploads/lotus_herbs_sun_54326_1920x1080.jpg" class="card-img-top" alt="Grapes on a vine" />
                          <div class="card-body">
                            <h5 class="card-title" >Common Name: Lotus</h5>
                            <p><strong>Scientific Name: Flat Boi</strong></p>
                            <p class="card-text"><strong>Growth Temprature: 1c ~ 27c</strong></p>
                            <p class="card-text">Kingdom: Water kingdom</p>
                            <a href="/"><button class="btn btn-success winery-btn" id="enter-winery-btn">Buy this plant!</button></a>
                          </div>
                        </div>
                    </div>
                 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInContent