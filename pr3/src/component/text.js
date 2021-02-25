import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Textdata() {
    return(
        <div>
        <body>
            <div class="parent">
                <div class="child">
                    <label for="fName">Your Full Name: </label>
                    <input type="text" id="fName"></input>
                    <br></br>
                    <label for="ssn">Your Social Security Number: </label>
                    <input type="text" id="ssn"></input>
                    <p>Your birthday:</p>
                    <input type="radio" id="b1" value="birthday"></input>
                    <label for="b1">1/1/1970</label>
                    <br></br>
                    <input type="radio" id="b2" value="birthday2"></input>
                    <label for="b2">1/1/2021</label>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                </div>
            </div>
        </body>
        </div>
    )
}
export default Textdata;