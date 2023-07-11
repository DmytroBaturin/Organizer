import {Input} from "../../input/input";
import {DropDown} from "../../dropDown";
import './colorBtn.scss'

const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}
export const Inputs = ({setTitle, setText, setCategory, setColor}) => {
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
    };
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
            <div className='choosecolor' style={style}>
           <DropDown
               onChange={onChangeCategory}
           />
            <input onChange={handleColorChange} className='colorBtn' value='#FFDAA3' type='color'/>
            </div>
        </div>
    )
}
