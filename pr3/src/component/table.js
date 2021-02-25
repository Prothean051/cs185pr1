import React from "react"
import ReactDOM from "react-dom"
import './style.css';

function Tabledata(){
    return(
<body>
<table>
    <tr>
        <th>Project</th>
        <th>Description</th>
        <th>Year</th>
    </tr>
    <tr>
        <td><a href="https://github.com/ashleyswang/cs184-school-planner">Generic Scheduling App</a></td>
        <td>A generic scheduling app, for Android. I'm adding text here to see if this resizes with the window. Looks like it does.</td>
        <td>2020</td>
    </tr>
    <tr>
        <td><a href="https://github.com/ucsb-cs48-w20/5pm-discord">Discord Bot</a></td>
        <td>A bot, for Discord.</td>
        <td>2020</td>
    </tr>
    <tr>
        <td><a href="https://google.com">Time Machine</a></td>
        <td>Will update link when it's working.</td>
        <td>TBD</td>
    </tr>
</table>
</body>
    )
}

export default Tabledata;