
import {DropDownNote, ModalNote} from "./DropDownNote";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const EditBtn = ({id}) => {
    const myRef = React.useRef()
    const ico = React.useRef()
    const [clickedOutside, setClickedOutside] = useState(false);
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
    return(
        <>
            <svg ref={ico} onClick={openDropdown} className='editbtnote'
                stroke={clickedOutside === true ? 'white' : 'black'}
                style={clickedOutside === true ? {
                     zIndex: 10,
                     opacity: '1',
                     stroke: "white"
            } : {

            }
                } width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29125 5.36855L9.29458 8.37188L4.00333 13.6631H1V10.6598L6.29125 5.36855ZM13.0417 1.62146C12.6432 1.22352 12.1031 1 11.54 1C10.9769 1 10.4368 1.22352 10.0383 1.62146L8.28875 3.37105L11.2921 6.37438L13.0417 4.6248C13.4396 4.22636 13.6631 3.68626 13.6631 3.12313C13.6631 2.56 13.4396 2.0199 13.0417 1.62146Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {
                clickedOutside &&
                <div ref={myRef} onClick={handleClickOutside} className='modals'>
                <DropDownNote
                id={id}
                />
                </div>
            }
        </>
    )
}