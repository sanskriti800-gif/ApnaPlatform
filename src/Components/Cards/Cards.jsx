import React from 'react'
import { useState } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import { Link } from 'react-router-dom'

const Cards = () => {
    const [showA, setShowA] = useState(true);
    const toggleShowA = () => {
        setShowA(!showA)
    };
    return (
        <>
            <div class="container-fluid">
                <Row>
                    <Col md={6} className="mb-2">
                        <Link to="/joinRoom"><a href="" className='btn-get-started mb-2' role="button" aria-disabled="true" onClick={toggleShowA}> Are you new <strong>user</strong> ?</a></Link>
                        <Toast show={showA} onClose={toggleShowA}>
                            <Toast.Header>
                                <img
                                    src="holder.js/20x20?text=%20"
                                    className="rounded me-2"
                                    alt=""
                                />
                                <strong className="me-auto">ApnaPlatform</strong>
                                <small>just now</small>
                            </Toast.Header>
                            <Toast.Body>Let's discuss with other people. Start the first Interview</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
                <h1 className='my-5' style={{color:'#3498db'}}> Blogs </h1>
                <div class="row">
                    <div className="container-fluid nav_bg">
                        <div className='row mx-auto'>
                            <div className='col-10 mx-auto'>
                                <div className="row">
                                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content center flex-column my-5'>
                                        <Card style={{ width: '18rem' }} class="mx-auto">
                                            <Card.Img variant="top" src="https://www.youremploymentmatters.com/wp-content/uploads/2016/10/job-interview.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Mastering Interview Skills</Card.Title>
                                                <Card.Text>
                                                    Tips for improving interview skills
                                                    Techniques for answering common interview questions
                                                    Dos and don'ts during an interview
                                                    Real-life examples and success stories
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 order-1 order-lg-2 header-img my-5">
                                        <Card style={{ width: '18rem' }} class="col-lg-4 mx-auto">
                                            <Card.Img variant="top" src="https://opportunitydesk.org/wp-content/uploads/2019/12/Step-by-Step-Guide-To-Pass-a-Job-Interview-Successfully.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Types of Interviews</Card.Title>
                                                <Card.Text>
                                                    Exploring different types of interviews (e.g., phone, video, panel)
                                                    Preparation strategies for each interview type
                                                    Tips for adapting to virtual interviews
                                                    Advice on handling group or panel interviews
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 order-1 order-lg-2 header-img my-5">
                                        <Card style={{ width: '18rem' }} class="mx-auto">
                                            <Card.Img variant="top" src="https://tesatalent.com/wp-content/uploads/2020/08/Interview-panel-scaled.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Resume Writing</Card.Title>
                                                <Card.Text>
                                                    Guidelines for creating an effective resume
                                                    Formatting tips and best practices
                                                    Key information to include in a resume
                                                    Tailoring a resume for specific industries or roles
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className='col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content center flex-column my-5'>
                                        <Card style={{ width: '18rem' }} class="mx-auto">
                                            <Card.Img variant="top" src="https://abaforlawstudents.com/wp-content/uploads/2019/10/job-interview.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Preparing for Technical Interviews</Card.Title>
                                                <Card.Text>
                                                    Technical interview preparation tips
                                                    Common technical interview topics and concepts
                                                    Coding exercises and practice problems
                                                    Resources for further learning and practice
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 order-1 order-lg-2 header-img my-5 ">
                                        <Card style={{ width: '18rem' }} class="col-lg-4 mx-auto">
                                            <Card.Img variant="top" src="https://www.applicantstack.com/wp-content/uploads/2019/05/swipeclock-ats-structured-interviews.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Handling Behavioral Questions</Card.Title>
                                                <Card.Text>
                                                    Understanding behavioral interview questions
                                                    Frameworks for structuring responses
                                                    Examples of behavioral questions and appropriate answers
                                                    Tips for demonstrating relevant skills and experiences
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                    <div className="col-lg-4 order-1 order-lg-2 header-img my-5 ">
                                        <Card style={{ width: '18rem' }} class="col-lg-4 mx-auto">
                                            <Card.Img variant="top" src="https://www.globalbankingandfinance.com/wp-content/uploads/2017/03/IMG_0312-733.jpg" />
                                            <Card.Body>
                                                <Card.Title style={{color:'#3498db'}}>Follow-Up and Post-Interview Etiquette</Card.Title>
                                                <Card.Text>
                                                    Importance of follow-up after an interview
                                                    Strategies for writing thank-you notes or emails
                                                    How to handle multiple offers or negotiations
                                                    Etiquette for post-interview communication
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards