import { useReducer } from "react"
import { changeColor, changeFancyColor} from "../Actions/index.js"
import  btnReducer  from "../Reducers/btnReducer"






function Red() {
    
    const [ buttonColor,  btnDispatcher ] = useReducer(btnReducer, { click: 'green', fancyClick: "green" })

    return (
        <div className='button-forest' >
            <button style={{backgroundColor:buttonColor.click}} onClick={() => btnDispatcher(changeColor())} >Click here </button>
            <button style={{backgroundColor:buttonColor.fancyClick}} onClick={() => btnDispatcher(changeFancyColor("pink"))} >Paspausk!</button>
            <button>Нажми! </button>
            <button>點擊這裡</button>
        </div>
    )
}

export default Red