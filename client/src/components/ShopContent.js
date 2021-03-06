import React, {useState} from "react"
import API from "../utils/API.js"
var axios =  require("axios")
const APIKEY = "_Z7tb-K4C49IqWHoxXntndWoQY4ImaBOq1jMifpQOh4"


function SignInContent() {

  const [searchVal, setsearchVal] = useState("")

function searchPlants(event) {
  event.preventDefault();
  console.log(searchVal)
var config = {
  method: 'get',
  url: `https://trefle.io/api/v1/plants?token=${APIKEY}&filter[common_name]=${searchVal}`,
  mode: "no-cors",
  headers: {"Access-Control-Allow-Origin": "*"}
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}


    return (
    <div className="customShopBanner">
        <div className="titleTextContainer">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="mainBannerText">~~~~~~Browse for plants!~~~~~~</h1>
                    <form class="signup" onSubmit={searchPlants}>
                      <div class="form-group alxFormGroup">
                          <label for="exampleInputUser1" className="alxFormHeader">Search the database!</label>
                          <input type="username" class="form-control alxFormInput" id="username-input" placeholder="Look for a plant!" value={searchVal} onChange={event => setsearchVal(event.target.value)} />
                          <button type="submit" class="btn btn-success alxCustomSearchBtn">Search</button>
                      </div>
                    </form>
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