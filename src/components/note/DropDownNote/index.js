import './modalNote.scss';
import {useDispatch, useSelector} from "react-redux";
import {deleteNote} from "../../../store/noteSlice";
import {modalState, openModal} from "../../../store/ModalSlice";

export const DropDownNote = ({id}) => {
    const open = useSelector(modalState)
    const dispatch = useDispatch()
    const HandlEditNote = ()  => {
        dispatch(
            openModal({
                open: !open,
            }))
    }

    return (
        <div style={{
            zIndex: '1'
        }} className='modalNote'>
            <div className='categoryEdit'>
                <p style={{cursor: "pointer"}} onClick={() => {dispatch(deleteNote({id: id}))}}>Delete</p>
                <p style={{cursor: "pointer"}} onClick={HandlEditNote}>Edit</p>
            </div>
        </div>
    );
};