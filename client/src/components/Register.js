import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import dashboard from "../assets/logindash.jpg";
import {Link} from "react-router-dom";
import {register, reset} from "../app/features/auth/authSlice";
import {useNavigate} from "react-router-dom";

export default function Register() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });

    const {username, password, confirmPassword} = formData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);
    const handleChange = (e) => {
        setFormData( (prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            console.log("Passwords do not match");
        } else {
            const userData = {
                username, password
            }
            dispatch(register(userData));
        }
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if (isSuccess || user) {
            console.log("User registered successfully");
            navigate("/login");
        }
        dispatch(reset());

    }, [isError, isSuccess, user, dispatch, navigate])

    return (
        <div className={"flex h-full bg-gray-800 text-amber-50"}>
            <div className={"flex flex-col p-6 w-2/4 bg-blue-900 h-full gap-8 mx-2 rounded-3xl justify-center"}>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"text-3xl"}>The simplest way to manage your workforce</h2>
                    <p className={"text-xl"}>Geist is a modern and minimalist design system for your next project.</p>
                </div>
                <div>
                    <img src={dashboard} alt={"Dashboard"}/>
                </div>
            </div>
            <div className={"flex flex-col gap-8 w-2/4 items-center justify-center h-full"}>
                <div className={"flex flex-col gap-2 w-2/4"}>
                    <h1 className={"text-4xl"}>Create your account now!!</h1>
                    <p className={"text-xl"}>Start managing your projects now</p>
                </div>
                <form  className={"flex flex-col gap-6 w-2/4"} onSubmit={handleSubmit} method={"POST"}>
                    <div className={"flex flex-col gap-2"}>
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" value={username} onChange={handleChange} required  className={" text-black h-10 rounded-xl px-2"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} required
                               className={"h-10 rounded-xl px-2 text-black"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label>Confirm password</label>
                        <input type="password" name="confirmPassword" placeholder="Confirm password" value={confirmPassword} onChange={handleChange} required
                               className={"h-10 rounded-xl px-2 text-black"}/>
                    </div>
                    <button type="submit" className={"bg-blue-900 h-16 w-2/4 rounded-3xl text-xl font-bold "}>
                        Register now
                    </button>
                </form>
                <p className={"w-2/4 text-slate-400"}>Already have an account? <span
                    className={"font-bold text-lg text-white"}><Link to={"/login"}>Sign in now! </Link></span></p>
            </div>

        </div>
    )
}