import React from 'react'
import Nav from '../../Components/NavBar/navbar'
import Card from '../../Components/Cards/Cards'
import Links from '../../Components/links/Links'
import Advantage from '../../Components/Advantage/advantage'
import './about.css'
import web from './image/rocketman.svg'
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

function home() {
  return (
    <div id="home">
      <Nav nav1="joinroom" nav2="createroom" nav3="About"/>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content center flex-column'>
                  <h1 className='mt-5 tagline'>Interview Preparation with <strong className="brand-name"><Typical
                    steps={['Apna Platform', 2000, 'Interview Platform', 1000]}
                    loop={Infinity}
                    wrapper="p"
                  /></strong></h1>
                  <h5 className='my-3'>platforms where you can sharing your ideas with people of same domain and interact with them</h5>
                  <div className="my-3">
                    <Link to="/joinRoom"><a href="" className='btn-get-started' role="button" aria-disabled="true">Get Started</a></Link>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img my-5">
                  <img src={web} className="img-fluid animated" alt="homeimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Card />
      <Advantage />
      <Links />
    </div>

  )
}

export default home