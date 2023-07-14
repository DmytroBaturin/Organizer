import './modal.scss'
import {useEffect, useRef} from "react";
export const Modal = ({setOpen, onSubmit, titleprops, children}) => {
    const modalRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            setOpen();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);
    return(
        <>
            <div className="drawer">
            </div>
        <div className='popUp' ref={modalRef}>
            <div className='header_popUp'>
                <h1>{titleprops}</h1>
                <svg onClick={() => setOpen()} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.949747 10.8493L10.8492 0.949758M0.949747 0.949758L10.8492 10.8493" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <div>{children}</div>
            <button className='submitbtn'
                onClick={(event) => {
                    setOpen()
                    onSubmit(event)
                }} >Click</button>
        </div>
        </>
    )
}
