import './modalNote.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, openModal} from "../../../store/noteSlice";
import {modalState} from "../../../store/noteSlice";

export const DropDownNote = ({id}) => {
    const open = useSelector(modalState)
    const dispatch = useDispatch()
    return (
        <div style={{
            zIndex: '1'
        }} className='modalNote'>
            <div className='categoryEdit'>
                <p style={{cursor: "pointer"}} onClick={() => {dispatch(deleteNote({id: id}))}}>Delete</p>
                <p style={{cursor: "pointer"}} onClick={() => {
                   dispatch(openModal({
                    open: !open
                }))
                }}>Edit</p>
            </div>
        </div>
    );
};