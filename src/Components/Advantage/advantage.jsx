import React from 'react'
import Typical from 'react-typical'
import { Chrono } from "react-chrono";
import img1 from './images/joinRoom.png'
import './advantage.css'

const advantage = () => {
    const items = [{
        title: "Step 1",
        cardTitle: "Join the room",
        cardSubtitle: "Navigate to the Join room",
        cardDetailedText: "Here you will get the available room of 2 and room of 4 code",
    },
    {
        title: "Step 2",
        cardTitle: "Join the room",
        cardSubtitle: "In the Join room",
        cardDetailedText: "You can select code of desired room",
    },
    {
        title: "Step 3",
        cardTitle: "Create the room",
        cardSubtitle: "Navigate to the Create room",
        cardDetailedText: "Here you can create the room or generate the private code",
    },
    {
        title: "Step 4",
        cardTitle: "Create the room",
        cardSubtitle: "In the Create room",
        cardDetailedText: "The generated code can be copied and share with you family and friends",
    }];
    return (
        <div className='my-5'>
            <h1 style={{ color: '#3498db' }}>Benefits of ApnaPlatform</h1>
            <div className="container my-5">
                <div className="row">
                    <div className='col-lg-1'></div>
                    <img src="https://i.pinimg.com/originals/2c/bd/22/2cbd22c6f715077cb3e49ff0bac9a6c6.gif" style={{}} className="ad-img col-lg-4" />
                    <div className='col-lg-1'></div>
                    <div className='col-lg-6'>
                        <h3 className="ad-head">
                            <Typical
                                steps={['NO SOFTWARE DOWNLOADS', 1000, 'NO SOFTWARE DOWNLOADS', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h3>
                        <p className="ad-para my-5">
                            If you have access to a computer/tablet and an internet connection, you’re ready to use our service. You’ll never need any downloading.
                        </p>
                        <h3 className="ad-head my-5">
                            <Typical
                                steps={['REDUCE STRESS & ANXIETY', 1000, 'REDUCE STRESS & ANXIETY', 1000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </h3>
                        <p className="ad-para">
                            Doubts about how to answer tricky interview questions may stress you out & create anxiety. Get over your nerves with mock interviews.
                        </p>
                    </div>
                    <div className="row my-5">
                        <div className='col-lg-1'></div>
                        <div className='col-lg-6'>
                            <h3 className="ad-head">
                                <Typical
                                    steps={['BOOST CONFIDENCE', 1000, 'BOOST CONFIDENCE', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h3>
                            <p className="ad-para my-5">
                                Test drive your answers with experts to improve your skills & experience and boost confidence.
                            </p>
                            <h3 className="ad-head my-5">
                                <Typical
                                    steps={['BEHAVIOURAL INTERVIEW QUESTIONS', 1000, 'BEHAVIOURAL INTERVIEW QUESTIONS', 1000]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                            </h3>
                            <p className="ad-para">
                                Mastering questions like -'Tell me about a time you failed' show you have the skills & competencies needed for the job.
                            </p>
                        </div>
                        <img src="https://cdn.dribbble.com/users/1516183/screenshots/6121571/interviewp_dribbble.gif" style={{}} className="ad-img2 col-lg-4" />
                        <div className='col-lg-1'></div>
                    </div>
                </div>
                <div className='middle' >
                    <h1 style={{ color: '#3498db' }}> How does it works ?</h1>
                    <div style={{ width: '80%', height: '950px' }} className='mx-auto timeline'>
                        <Chrono items={items} mode="VERTICAL_ALTERNATING" scrollable={{ scrollbar: true }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default advantage