import styles from './filter.module.scss'
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {categoryState, getNotes, updateCategory} from "../../../store/noteSlice";
export const Filters = () => {
    const categoryStates = useSelector(categoryState)
    const dispatch = useDispatch()
    const myRef = React.useRef()
    const ico = React.useRef()
    const [clickedOutside, setClickedOutside] = useState(false);
    const handleCategoryClick = () => {
        dispatch(updateCategory(!categoryStates));
        dispatch(getNotes({ search: '' }));
        openDropdown();
    };


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
        <div className={styles.filterContainer}>
            <div ref={ico} onClick={openDropdown} className='filter-main'>
                <p>filter by</p>
                <svg width="9" height="4" viewBox="0 0 9 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 -7.86805e-07L8.39711 3.75L0.602886 3.75L4.5 -7.86805e-07Z" fill="black"/>
                </svg>
            </div>
            {clickedOutside && (
                <div ref={myRef} className={styles.filters}>
                <p style={categoryStates ? {
                    opacity: "0.2"
                }: {opacity: "1"}} onClick={handleCategoryClick}>category</p>
            </div>)}
        </div>
    )
}
