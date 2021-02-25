import React from "react"
import ReactDOM from "react-dom"
import './style.css';


function Emaildata(){
    return(
<body>
    <div class="parent">
    <div class="child">
        <form>
            <label for="email">Your Email Address:</label><br></br>
            <input type="text" id="email"></input>
            <br></br>
            <button type="submit" onclick="validate(document.getElementById('email').value)">Submit</button>
        </form>
    </div>
</div>
<script type='text/jsx'>
    {
    function validate(s) {
        if(s.includes('@')&&(s.slice(-4)==('.edu')||s.slice(-4)==('.com'))){
            alert("Valid email detected. Have a nice day.");
        } else {
            alert("Invalid email detected. Your IP Address has been forwarded to the authorities, please stay where you are.");
        }
    }
    }
</script>
</body>
    )
}

export default Emaildata;