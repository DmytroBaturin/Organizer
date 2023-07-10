import { Input } from "../../components/input/input";
import './loginpage.scss';
import { useEffect, useState } from "react";
import {useDispatch} from "react-redux";
import {setAuth} from "../../store/authSlice";

export const Login = () => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [profile, setProfile] = useState({});
    const [error, setError] = useState(null);


    const onChangeUserName = (val) => {
        setUserName(val);
    };

    const onChangePassword = (val) => {
        setPassword(val);
    };

    const Submit = () => {
        if(!userName || !password){
            setError(true)
            setTimeout(() => {
                setError(false)
            },2000)
        }else{
            setProfile({ userName, password});
            dispatch(setAuth({auth: true}))
            localStorage.setItem('profile', JSON.stringify({ userName, password, isAuth: true}));
        }
    };

    return (
        <div className="loginpage">
            <h1>Login</h1>
            <div className="login-container">
                <Input
                    modal
                    onChange={onChangeUserName}
                    type='Username'
                />
                <Input
                    modal
                    onChange={onChangePassword}
                    type='password'
                />
                <button

                style={error? {
                    background: 'red',
                    transition: 'background 0.2s ease-in-out'
                } : {transition: 'background 0.2s ease-in-out'}}
                    onClick={Submit}>Login</button>
            </div>
        </div>
    );
};
