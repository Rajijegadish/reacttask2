import React from "react";
import "./WorkProcess.css";
import WorkProcessVid from "../../assets/videos/video1.mp4.3gpp";
import {ControlBar, Player, PlayToggle} from 'video-react';
import 'video-react/dist/video-react.css';
import ReactPlayer from 'react-player';

const WorkProcess = () => {
    return (
        <div className="workprocess section__padding">
            <div className="container">
                <div className="workprocess__content text__center">
                    <h2 className="section__title text__cap">Our work process</h2>
                    <p className="para__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, autem perferendis? Tenetur iusto deserunt itaque nisi fugiat id possimus odio.</p>
                    {/* <div>
                    <video width="640" height="360" controls>
                    <source src="/path/to/your/video.mp4" type="video/mp4" />
                     Your browser does not support the video tag.
                    </video>
                    </div>     */}
                    <div className="vid__container">
                        <Player autoPlay  src = {WorkProcessVid}>
                            <ControlBar autoHide = {false} disableDefaultControls = {true}>
                                <PlayToggle />
                            </ControlBar>
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkProcess;
