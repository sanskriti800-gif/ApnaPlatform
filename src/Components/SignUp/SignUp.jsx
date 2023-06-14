import React, { useState } from "react";
import styles from "./Signup.css";
import InputControl from "../InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Form from 'react-bootstrap/Form';

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
    stream: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    //CHECKING IF THE USER HAS ENTERED ALL THE DETAILS OR NOT
    if (!values.name || !values.email || !values.pass || !values.stream) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    // THIS CREATEUSERWITHEMAILANDPASSWORD PROVIDES TO AUTHENTICATE THE MAIL AND PASSWORD BY THE FIREBASE
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        // FOR DISPLAYING NAME PROPERTY
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div>
      <div style={{marginTop:'10%'}}>
        <h1 style={{color:'#3498db'}}>Signup</h1>

        <InputControl
          label="Name"
          placeholder="Enter your name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          label="Email"
          placeholder="Enter email address"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          label="Password"
          placeholder="Enter password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <Form.Select aria-label="Default select example" style={{ maxWidth: '500px'}} className='mx-auto mb-3'
          id="stream"
          name="stream"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, stream: event.target.value }))
          }>
          <option value="">Select Stream</option>
          <option value="Computer Science Engineering">Computer Science Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Chemical Engineering">Chemical Engineering</option>
          <option value="Aerospace Engineering">Aerospace Engineering</option>
        </Form.Select>

        <div>
          <b style={{color:'red',fontSize:'10px', marginRight:'3px', fontWeight:'500'}} >{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled} className="btn btn-primary"> 
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">LogIn</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
