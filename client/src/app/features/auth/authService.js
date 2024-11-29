import axios from 'axios';


const BASE_URL = 'http://localhost:8080';

const REGISTER_URL = `${BASE_URL}/register`;
const LOGIN_URL = `${BASE_URL}/login`;
const REFRESH_URL = `${BASE_URL}/refresh`;

const register = async (userData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    const response = await axios.post(REGISTER_URL, userData, config);
    return response.data;
}
const login = async (userData) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const response = await axios.post(LOGIN_URL, userData, config);
    if(response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const logout = () => {
    localStorage.removeItem("user");
}

const authService  = {register, login, logout};

export default authService;
