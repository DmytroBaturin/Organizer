import './userpage.scss'
import {Input} from "../../components/input/input";
export const UserPage = ({profile}) => {
    return(
        <div className='userpage'>
         <h1 className='type-page'>Profile</h1>
         <div className='info-profile'>
             <div className='avatar'></div>
             <div className='info-container-profile'>
                 <h1>User Name: {profile.userName}</h1>
                 <p>edit password</p>
             </div>
         </div>
        </div>
    )
}