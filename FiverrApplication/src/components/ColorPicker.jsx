import {useState} from "react"
import { ChromePicker} from "react-color";

export default function ColorPicker() {
  const [showPicker,setShowPicker] = useState(false);
  const [selectedColor,setSelectedColor] = useState("")

  const findColor = () => {
    setShowPicker(!showPicker)
  }

  const handleChange = (color) => {
    setSelectedColor(color.hex)
  }
  return (
    <div>
      {/* <input 
      onChange={({target:{value}})=>setSelectedColor(value)} 
      value={selectedColor}/> */}
      <button onClick={findColor}>{!showPicker? "select color": "close colorpicker"}</button>
      {
        showPicker && <ChromePicker color={selectedColor} onChange={handleChange} />
      }
      {/* <ChromePicker/> */}
      <div style={{backgroundColor:selectedColor}}>
        Hello world!
      </div>
    </div>
  );
}