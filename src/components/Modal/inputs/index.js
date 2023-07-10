import {Input} from "../../input/input";
import {useDispatch} from "react-redux";
import {DropDown} from "../../dropDown";

export const Inputs = ({setTitle, setText, setCategory}) => {
    const onChangeTitle = (val) => {
        setTitle(val)
    }
    const onChangeText = (val) => {
        setText(val)
    }
    const onChangeCategory = (val) => {
        setCategory(val)
    }

     return(
        <div className="input_popUp">
            <Input
                onChange={onChangeTitle}
                modal
                type='title'
            />
            <Input
                height='100px'
                onChange={onChangeText}
                modal
                type='text'
            />
           <DropDown
               onChange={onChangeCategory}
           />
        </div>
    )
}
