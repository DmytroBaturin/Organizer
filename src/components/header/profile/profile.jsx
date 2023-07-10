import user from "../../../img/User-45.svg";
import React, { useEffect, useRef, useState } from "react";
import { ProfileMenu } from "./profileMenu";
import {useAutoAnimate} from "@formkit/auto-animate/react";
import './ing.model.scss'
export const Profile = () => {
    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef(null);
    const ico = useRef();
    const [anim] = useAutoAnimate()
    const openDropdown = () => {
        setClickedOutside(!clickedOutside);
    };

    const handleClickOutside = (e) => {
        if (myRef.current && !myRef.current.contains(e.target) && !ico.current.contains(e.target)) {
            setClickedOutside(false)
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className="profile-navbar">
            <img ref={ico} className="userImg" onClick={openDropdown} src={user} alt="logo" />
            {clickedOutside && (
                <div onClick={handleClickOutside} ref={myRef} className="profmenu">
                    <ProfileMenu
                    clodeDropdown={openDropdown}
                    />
                </div>
            )}
        </div>
    );
};
