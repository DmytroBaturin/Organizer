import './dropdown.scss'
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getNotes, updateCategory} from "../../store/noteSlice";
export const DropDown = ({onChange}) => {
    const [open, setOpen] = useState(false)
    const [activeIndex, setActiveIndex] = useState(null)
    const [active, setActive] = useState(null)
    const category = [
        {important: 'important 1'},
        {important: 'important 2'},
        {important: 'important 3'}
    ]
    return(
        <div className='dropdown'>
            <button
                style={open? {
                    border: '1px solid #6a6ef3'
                }: {}}
                onClick={() => {
                setOpen(!open)
            }} className="dropbtn">{active ? active : 'Category'}</button>
            {open && <div className="dropdown-content">
                {category.map((val, i) => (
                    <a key={i}  style={
                        activeIndex === i ? { background: '#F2F2F2' } : {} // Применение стиля только к активному элементу
                    }
                        onClick={() => {
                            setActiveIndex(i);
                            setActive(val.important)
                            setOpen(!open)
                            onChange(i+1)
                    }}>{val.important}</a>
                ))}
            </div>}
        </div>
    )
}