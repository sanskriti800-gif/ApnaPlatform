import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar/navbar'
import web from './image/imag1.webp'
import './about.css'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import firedb from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateRoom = ({ uuid }) => {
    // const [roomCode, setRoomCode] = useState("");
    // const navigate = useNavigate();
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     navigate(`/room/${roomCode}`);
    // }
    const [roomId, setRoomId] = useState(uuid());
    const [state, setState] = useState({ name: "", roomCode: roomId });
    const [data, setData] = useState({});
    const { id } = useParams();
    const _id = id?.split(":")[1];
    console.log(_id, id);

    // getting the value from the database
    useEffect(() => {
        firedb.child("rooms").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setData({ ...snapshot.val() });
                console.log(snapshot.val());
            } else {
                setData({});
            }
        });
        return () => {
            setData({});
        };
    }, [_id]);

    // Generating the random room Codes
    const { name, roomCode } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            console.log("fgf");
            toast.error("please provide your details");
        } else {
            console.log(state);
            firedb.child("rooms").push({ ...state, members: [] }, (err) => {
                if (err) {
                    toast.error(err);
                } else {
                    toast.success("Created Room Code sucessfully");
                }
            });
            setTimeout(() => history("/joinRoom"), 500);
        }
    };
    return (
        <div>
            <NavBar nav1="joinroom" nav2="createroom" nav3="About" />
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content center flex-column'>
                                    <h1 className='mt-5 tagline'>Interview Preparation with <strong className="brand-name">Apna Platform</strong></h1>
                                    <h5 className='my-3'>platforms where you can sharing your ideas with people of same domain and interact with them</h5>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img my-5">
                                    <img src={web} className="img-fluid animated" alt="homeimg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h1 className='my-5' style={{ color: '#3498db' }}>Let's Create a Room</h1>
                <form onSubmit={handleSubmit} style={{ border: '3px solid #fff' }}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter you name"
                        value={name}
                        className='my-3'
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        id="roomCode"
                        name="roomCode"
                        placeholder="Generate Room Code"
                        value={roomId}
                        onChange={handleInputChange}
                        className='my-3'
                        disabled
                    /><br/>

                    <input
                        type="submit"
                        value="Generate Room Code"
                        className='my-3 btn btn-primary'
                        onSubmit={handleSubmit}
                    />
                    <ToastContainer />
                </form>
            </div>
            <div>
                <h4 className='my-5' style={{ color: '#026882' }}>Click on the generate button, copy and share with your friends</h4>
            </div>
        </div>
    )
}

export default CreateRoom