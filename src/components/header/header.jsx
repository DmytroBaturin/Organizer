import './header.scss'
import primary from '../../img/primary.svg'
import React, {useEffect, useRef, useState} from 'react'
import {Profile} from "./profile/profile";
import {Input} from "../input/input";
import {Link} from "react-router-dom";
import {getNotes} from "../../store/noteSlice";
import {debounce} from "lodash/function";
import {useDispatch} from "react-redux";
import userImg from "./profile/profileMenu/user-3black.svg"
import {setAuth} from "../../store/authSlice";
import exit from '../../img/exit-svgrepo-com.svg'
export const Header = () => {
    const [open, setOpen] = useState(false)

    const openMobileMenu = () => {
        setOpen(!open)
    }
    const dispatch = useDispatch()
    const onChange = React.useCallback(
        debounce(
            search => {
                dispatch(getNotes({search}))
            },
            250));
    return(
        <header>
            <div className='mobile-navbar'>
            <Link
                style={{
                    color: 'black',
                    marginRight: '60px',
                }}
                to='/'>Organiser</Link>
            <img
                onClick={openMobileMenu}
                src={primary} alt=''/>
            </div>
              <Input
                  type='search'
                  onChange={onChange}
                  color='#F9F9F9'
              />
              <Profile
              />
            {open && <div className='mobile-menu'>
                <div className='mobile-menu-center'>
                    <div className='mobile-menu-info'>
                        <h1>My profile</h1>
                        <p>Role: Admin</p>
                    </div>
                    <Link onClick={openMobileMenu} style={{
                        color: 'black'}} to='/userpage'>
                <div className='menu-point'>
                    <img alt='' src={userImg}/>
                    <p>Info about Profile</p>
                </div>
                    </Link>
                    <div style={{
                        cursor: 'pointer',
                    }} onClick={() => {
                        dispatch(setAuth({auth: false}))
                    }} className='menu-point'>
                        <img alt='' style={{
                            width: '40px',
                        }} src={exit}/>
                        <p>Exit</p>
                    </div>
                </div>
            </div>}
        </header>
    )
}