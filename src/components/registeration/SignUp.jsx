import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "student"
    });

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required")
        }

        
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create student object
            const student = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "student")

            // Add User Detail
            addDoc(userRefrence, student);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            })

            toast.success("Signup Successfully");

        
            navigate('/login')
        } catch (error) {
            console.log(error);
            
        }

    }

    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
            {/* Signup Form  */}
            <div className="signup_Form bg-light p-4 rounded border border-secondary shadow">

                {/* Top Heading  */}
                <div className="mb-4">
                    <h2 className='text-center text-2xl font-weight-bold text-secondary'>
                        Signup
                    </h2>
                </div>

                {/* Additional Information */}
                <div className="mb-4">
                    <p className="text-center text-muted">
                        Please fill out the form below to create an account. 
                       
                    </p>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                name: e.target.value
                            })
                        }}
                        className='form-control'

                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                email: e.target.value
                            })
                        }}
                        className='form-control'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-4">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e) => {
                            setUserSignup({
                                ...userSignup,
                                password: e.target.value
                            })
                        }}
                        className='form-control'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-4">
                    <button
                        type='button'
                        onClick={userSignupFunction}
                        className='btn btn-primary btn-block'
                    >
                        Signup
                    </button>
                </div>

                {/* Sponsor Buttons */}
               
            <p>Already have an account? <Link to={'/login'} className='text-secondary font-weight-bold'>Login</Link></p>
            </div>
        </div>
    );
}

export default Signup;
