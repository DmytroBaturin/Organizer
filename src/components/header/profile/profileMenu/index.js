import './profilemenu.scss'
import user from './user-3.svg'
import edituser from './edit-user-3.svg'
import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import exit from './exit-svgrepo-com.svg'
import {useDispatch} from "react-redux";
import {setAuth} from "../../../../store/authSlice";
export const ProfileMenu = ({clodeDropdown}) => {
    const dispatch = useDispatch()
    return(
        <div className='profilemenu'>
           <div className='menu-select'>
               <div className='menu-select-border'>
            <div className='menutitle'>
                <h1>My Profile</h1>
               <p>Role: admin</p>
            </div>
              <div className='menuoptions-border'>
               <div className='menuoptions'>
                   <NavLink to='/userpage'>
                   <div onClick={clodeDropdown} className='hoveruser edituser'>
                       <img src={user} alt=""/>
                       <p>Info about Profile</p>
                   </div>
                   </NavLink>
                   <div onClick={() => {
                       dispatch(setAuth({auth: false}))
                   }} className='hoveruser exit'>
                       <img src={exit} alt=""/>
                       <p>Exit</p>
                   </div>
               </div>
               </div>
               </div>
           </div>
        </div>
    )
}