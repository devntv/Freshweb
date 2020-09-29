import React from "react"
import './Button.css'

const STYLES = ['btn--primary', 'btn--outline']

const SIZE = ['btn--medium', 'btn--large', 'btn--mobile']

const COLOR = ['primary', 'blue', 'red', 'green']

export const Button =({
     children,
     type, 
     onClick, 
     buttonStyle, 
     buttonSize, 
     buttonColor
})=>{

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize: SIZE[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[2];
    
    return (
    <button className={
        `btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`
    } 
    onClick={onClick}
    type={type}
    >{children}</button>
    )
}