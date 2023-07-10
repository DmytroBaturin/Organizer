import './modal.scss'
import {useDispatch, useSelector} from "react-redux";
import {addNote, modalState, openModal} from "../../store/noteSlice";
import {Input} from "../input/input";
import {Inputs} from "./inputs";
import {useState} from "react";
export const Modal = ({setOpen, onSubmit, titleprops}) => {
    const [title, setTitle] = useState('Title')
    const [text, setText] = useState('Text')
    const [category, setCategory] = useState('1')

    return(
        <>
            <div className="drawer">
            </div>
        <div className='popUp'>
            <div className='header_popUp'>
                <h1>{titleprops}</h1>
                <svg onClick={setOpen} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.949747 10.8493L10.8492 0.949758M0.949747 0.949758L10.8492 10.8493" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <Inputs
                setTitle={setTitle}
                setText={setText}
                setCategory={setCategory}
            />
            <button className='submitbtn'
                onClick={() => {
                    setOpen()
                    onSubmit(title,text,category)
                }} >Click</button>
        </div>
        </>
    )
}
