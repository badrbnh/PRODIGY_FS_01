import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {logout, reset} from "../app/features/auth/authSlice";
import { useDispatch } from "react-redux";

export default function Dashboard() {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    const handleCLick = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/login");
    }

    return (
        <div className="flex flex-col bg-gray-800 items-center justify-center h-full gap-4">
            <h1 className="text-amber-50 text-6xl font-bold">Dashboard</h1>
            <p className="text-amber-50 text-2xl">
                Only protected users can access this page!!
            </p>
            <button className={"text-amber-50 bg-blue-900 rounded-3xl p-4 w-1/6 font-bold text-2xl"} onClick={handleCLick}>Logout</button>
        </div>
    );
}
