import React from 'react'
import './Links.css'
import Form from 'react-bootstrap/Form';
import img from '../../Components/Advantage/images/Screenshot 2023-06-10 020717.png'

const Links = () => {
    return (
        <div className='links'>
            <div className='container'>
                <div className='row mx-auto text-center footer pt-5'>
                    <div className='col-lg-3 mx-auto'>
                        <img src={img} className='footer-img' />
                        <h4>Online face-to-face mock interviews with experts help you train & prepare for job interviews in a no pressure, stress-free environment simulating a real job interview. Stay ahead of the competition with expert mentoring & feedback!</h4>
                        <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'row',marginTop:'10%' }}>
                            <li className='me-2'><i class="fa-brands fa-linkedin fa-2xl primary"></i> <a href='https://www.linkedin.com/in/sanskriti-gupta-151aab202/' style={{ textDecoration: 'none', color: '#003f68' }}>sanskriti</a></li>
                            <li className='me-2'><i class="fa-brands fa-linkedin fa-2xl primary"></i> <a href='https://www.linkedin.com/in/sanskriti-gupta-151aab202/' style={{ textDecoration: 'none', color: '#003f68' }}>anup</a></li>
                            <li className='me-2'><i class="fa-brands fa-github fa-2xl dark"></i> <a href='https://www.linkedin.com/in/sanskriti-gupta-151aab202/' style={{ textDecoration: 'none', color: '#003f68' }}>sanskriti</a></li>
                            <li className='me-2'><i class="fa-brands fa-github fa-2xl dark"></i> <a href='https://www.linkedin.com/in/sanskriti-gupta-151aab202/' style={{ textDecoration: 'none', color: '#003f68' }}>anup</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 mx-auto team'>
                        <h1 style={{textAlign:'center', marginBottom:'10%'}}> TEAM </h1>
                        <ul>
                            <li>
                                <p style={{fontWeight:'700'}}>SANSKRITI GUPTA</p>
                                <p>I'm persuing my BTech degree in Computer Science and Engineering from one of the pretigious college of India VIT Bhopal and live in UttarPradesh, India.</p>
                            </li>
                            <li>
                                <p style={{fontWeight:'700'}}>ANUP KUMAR</p>
                                <p>I'm persuing my BTech degree in Computer Science and Engineering from one of the pretigious college of India VIT Bhopal and live in Bihar, India.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='col-lg-3 mx-auto team'>
                        <h1 style={{textAlign:'center', marginBottom:'10%'}}> DOMAIN COVERED </h1>
                        <ul>
                            <li>Computer Science Engineering</li>
                            <li>Civil Engineering</li>
                            <li>Mechanical Engineering</li>
                            <li>Electrical Engineering</li>
                            <li>Chemical Engineering</li>
                            <li>Aerospace Engineering</li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h1> INTERVIEW TIPS IN YOUR INBOX </h1>
                        <Form className='my-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ fontSize: '20px', color: '#e9f6ff' }}>Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-left" controlId="exampleForm.ControlTextarea1">
                                <Form.Label style={{ fontSize: '20px', color: '#e9f6ff' }}>Comment</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <a href="mailto:sanskriti.gupta2020@vitbhopal.ac.in" className='btn-get-started' role="button" aria-disabled="true">Submit</a>
                        </Form>

                    </div>
                </div>
                <div>
                    <h2 className="mt-5" style={{ fontSize: '14px', fontWeight: '700',color: '#e9f6ff' }}>Copyright <i class="fa-regular fa-copyright"></i> 2023</h2>
                    <p style={{ fontSize: '14px', fontWeight: '700',color: '#e9f6ff'}}>CAREFULLY CRAFTED WITH ❤️ ON THE NORTH OF INDIA FOR STUDENTS & JOB SEEKERS</p>
                </div>
            </div>

        </div>
    )
}

export default Links