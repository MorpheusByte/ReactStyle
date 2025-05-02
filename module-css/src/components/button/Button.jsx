// import './Button.css'
import ButtonStyle from "./Button.module.css"


const Button = () => {
    return(
        <div className={ButtonStyle.wrapper}>
            <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-blue"]}` }>İnfo</button>
            <button className={`${ButtonStyle.btn} ${ButtonStyle["btn-red"]}` }>Back</button>
            {/* <button className="btn btn-red">Back</button> */}
        </div>
    )
}

export default Button