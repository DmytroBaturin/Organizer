import {Input} from "../../input/input";
import {DropDown} from "../../dropDown";
import './colorBtn.scss'

const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
}
export const Inputs = ({setTitle, setText, setCategory, setColor, value}) => {
    const { title, text, color, category } = value;
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
                value={title}
                onChange={onChangeTitle}
                modal
                type='title'
            />
            <Input
                value={text}
                height='100px'
                onChange={onChangeText}
                modal
                type='text'
            />
            <div className='choosecolor' style={style}>
           <DropDown
               value={category}
               onChange={onChangeCategory}
           />
            <input onChange={handleColorChange} className='colorBtn' value={color} type='color'/>
            </div>
        </div>
    )
}
