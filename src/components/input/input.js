import search from "../../img/search.svg";
import React, {useState} from "react";
import './input.scss'
import eye from "../../img/eye.svg"

const modalStyles = {
    padding: "0px 15px",
    textAlign: "left"
}
const lookStyle = {
    position:'absolute',
    right: '30px',
    cursor: 'pointer',
    transition: 'opacity 0.1s ease-in-out',
}
export const Input = ({onChange, modal, type, height, value}) => {
    const [look, setLook] = useState(true)
    return(
        <div className="padding input-container">
            <div className='input-container_ico'>
                <input
                    value={value}
                    type={type === 'password' && look ? 'password' : ''}
                    onChange={(e) => onChange(e.target.value)}
                    style={modal ? {...modalStyles,
                    height: height
                    } : {}} placeholder={modal ? type : "search"}/>
                {type === 'password' && <img style={look ? lookStyle :
                {
                    ...lookStyle,
                    opacity: '0.3',
                }}
                 src={eye} onClick={() => setLook(!look)}></img>}
                {!modal && <img className="search" alt="" src={search}/>}
            </div>
        </div>
    )
}