function validate(s){
    if(s.includes('@')&&(s.slice(-4)==('.edu')||s.slice(-4)==('.com'))){
        alert("Valid email detected. Have a nice day.");
    } else {
        alert("Invalid email detected. Your IP Address has been forwarded to the authorities, please stay where you are.");
    }
}