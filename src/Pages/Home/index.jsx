import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import NavBar from '../../Components/NavBar/navbar'
import { Sidebar } from "react-custom-sidebar";
import Typical from 'react-typical';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import firedb from "../../firebase";
import web from './image/imag1.webp'
import './about.css'
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Homepage = () => {
    // const [roomCode, setRoomCode] = useState("");
    // const [data, setData] = useState({})
    // const navigate = useNavigate();
    // const handleFormSubmit = (e) => {
    //     e.preventDefault();
    //     navigate(`/room/:${roomCode}`);
    // }
    /*           */
    const [state, setState] = useState({ name: "" });
    const [data, setData] = useState({});
    const { id } = useParams();
    const _id = id?.split(":")[1];
    const [updatedData, setUpdatedData] = useState({});
    const [roomId, setRoomId] = useState("");
    const [roomCodes, setRoomCodes] = useState([]);
    /* */
    useEffect(() => {
        firedb.child("rooms").on("value", (snapshot) => {
            if (snapshot.val != null) {
                setData({ ...snapshot.val() })
            }
            else {
                setData({})
            }
        })
        return () => {
            setData({})
        }
    }, [])

    /* */

    useEffect(() => {
        firedb.child("rooms").on("value", (snapshot) => {
            if (snapshot.val() !== null) {
                const data = snapshot.val();

                for (const key in data) {
                    if (_id == key) {
                        console.log();
                        setRoomId(data[key].roomCode);
                    }
                }
                Object.values(data).forEach((item) => {
                    setRoomCodes((prevState) => [...prevState, item]);
                });

                // setRoomCodes(codes);
                setData({ ...data });
            } else {
                setData({});
                setRoomCodes([]);
            }
        });

        return () => {
            setData({});
            setRoomCodes([]);
        };
    }, [_id]);

    console.log(roomId);

    const { name, roomCode } = state;

    const handleInputChange = (e) => {
        const temp = { ...state };
        temp[e.target.id] = e.target.value;
        setState(temp);
    };
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
    const history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        //updating data
        //update _data to firebase
        let flag = true;
        if (!name) {
            console.log("fgf");
            toast.error("please provide your details");
        } else {
            let _data = [];
            const data_ = Object.values(data);
            data_.forEach((item) => {
                if (item.roomCode == roomId) {
                    console.log(item.members?.length >= 4);
                    if (item.members?.length >= 4) {
                        flag = false;
                        return toast.error("ALready 4 people");
                    } else {
                        item.members = item.members
                            ? [...item.members, { name: state.name }]
                            : [{ name: state.name }];
                        _data = item;
                        setUpdatedData(item);
                    }
                }
            });
            console.log(flag);
            if (flag) {
                firedb.child(`rooms/${_id}`).set(_data, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("updated sucessfully");
                    }
                });
                console.log(state);
                console.log(Object.values(data));

                setTimeout(() => history("/"), 500);
            }
        }
    };
    return (
        <div className='home-page' id="JoinRoom">
            <NavBar nav1="joinroom" nav2="createroom" nav3="About" />
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row">

                                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content center flex-column'>
                                    <h1 className='mt-5 tagline'>Interview Preparation with <strong className="brand-name">Apna Platform</strong></h1>
                                    <h5 className='my-3'>This will help you to interact with people and overcome your fear of public speaking</h5>
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
                <h1 className='my-5' style={{ color: '#3498db' }}>Let's Get Started</h1>
            </div>
            <div>
                <table className='table container table-striped table-hover table-light'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">RoomCode</th>
                            <th scope="col">Available seats</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(data).map((id, index) => {
                            return (
                                <tr key={id}>
                                    <td>{index + 1}</td>
                                    <td>{data[id].name}</td>
                                    <td>{data[id].roomCode}</td>
                                    <td>{data[id].members?.length >= 0 ? 4 - data[id].members?.length : 4}</td>
                                    <td>
                                        <Link to={`/room/${id.substring(1)}`}>
                                            <Button type="submit" className="btn btn-outline-dark" onSubmit={handleSubmit}>Join the room {_id}</Button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Homepage



{/* <form className='form' onSubmit={handleFormSubmit} style={{ border: '3px solid #fff' }}>

<label><h2 style={{ color: '#026882' }}>Join the room</h2></label><br />
<input
    value={roomCode}
    onChange={(e) => setRoomCode(e.target.value)}
    type="text"
    required
    placeholder='Get the code'
    className='my-3'
/><br />
<Button type="submit" onSubmit={handleFormSubmit} className="btn btn-outline-dark">Join the room</Button>
</form> */}