
import dashboard from "../assets/logindash.jpg";
import { useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login, reset} from "../app/features/auth/authSlice";


export default function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const {username, password} = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth);

    const handleChange = (e) => {
        setFormData( (prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username, password
        }
        dispatch(login(userData));
    }

    useEffect(() => {
        if (isError) {
            console.log(message);
        }
        if (isSuccess || user) {
            console.log("User registered successfully");
            navigate("/dashboard");
        }

    }, [isError, isSuccess, user, dispatch, navigate])



    return (
        <div className={"flex h-full bg-gray-800 text-amber-50"}>
            <div className={"flex flex-col gap-8 w-2/4 items-center justify-center h-full"}>
                <div className={"flex flex-col gap-2 w-2/4"}>
                    <h1 className={"text-4xl"}>Welcome back!!</h1>
                    <p className={"text-xl"}>Login to your account</p>
                </div>
                <form onSubmit={handleSubmit} method={"POST"}  className={"flex flex-col gap-6 w-2/4"}>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"username"}>Username</label>
                        <input id={"username"}  value={username} onChange={handleChange} autoComplete={"off"} required type="text" name="username" placeholder="Username" className={"h-10 text-black rounded-xl px-2"}/>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <label htmlFor={"password"}>Password</label>
                        <input id={"password"} value={password} onChange={handleChange} required type="password" name="password" placeholder="Password" className={"h-10 text-black rounded-xl px-2"}/>
                    </div>
                    <button type="submit" className={"bg-blue-900 h-16 w-2/4 rounded-3xl text-xl font-bold "}>Login now</button>
                </form>
                <p className={"w-2/4 text-slate-400"}>Don&apos;t have an account? <span className={"font-bold text-lg text-white"}><Link to={"/register"}>Create one now! </Link></span></p>
            </div>
            <div className={"flex flex-col p-6 w-2/4 bg-blue-900 h-full gap-8 mx-2 rounded-3xl justify-center"}>
                <div className={"flex flex-col gap-2"}>
                    <h2 className={"text-3xl"}>The simplest way to manage your workforce</h2>
                    <p className={"text-xl"}>Geist is a modern and minimalist design system for your next project.</p>
                </div>
                <div>
                    <img src={dashboard} alt={"Dashboard"} />
                </div>
            </div>
        </div>
    )
}