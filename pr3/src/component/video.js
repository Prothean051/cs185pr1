import React from "react"
import ReactDOM from "react-dom"
import './style.css'
import video1 from './videos/video.mp4'
import video2 from './videos/video (1).mp4'
import video3 from './videos/Pexels Videos 1526909.mp4'
import video4 from './videos/Video Of People Waiting For A Taxi On A Rainy Night.mp4';

function Videodata(){
    return(
<div>
<body>
    <div class="outer-grid">
        <div class="inner-grid">
            <video id="salmon" src={video1} controls>
            </video>
        </div>
        <div class="inner-grid">
            <video id="dinner" src={video2} controls>
                this broke I guess :\
            </video>
        </div>
        <div class="inner-grid">
            <video id="seal" src={video3} controls>
                this broke I guess :\
            </video>
        </div>
        <div class="inner-grid">
            <video id="taxi" src={video4} controls>
                this broke I guess :\
            </video>
        </div>
    </div>
    <div id="light">
        <video id="salmonlight" controls>
            <source src={video1} type="video/mp4"></source>
        </video>
    </div>
    <div id="light2">
        <video id="dinnerlight" controls>
            <source src={video2} type="video/mp4"></source>
        </video>
    </div>
    <div id="light3">
        <video id="seallight" controls>
            <source src={video3} type="video/mp4"></source>
        </video>
    </div>
    <div id="light4">
        <video id="taxilight" controls>
            <source src={video4} type="video/mp4"></source>
        </video>
    </div>
    <div id="fade" onClick="lightbox_close()"></div>
    <div id="fade2" onClick="lightbox_close2()"></div>
    <div id="fade3" onClick="lightbox_close3()"></div>
    <div id="fade4" onClick="lightbox_close4()"></div>
    <script src="videoLightbox.js" type="text/js"></script>
</body>
</div>
    )
}
export default Videodata;