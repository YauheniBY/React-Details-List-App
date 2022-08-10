import React from 'react'
import classes from './MyModal.module.css'

const MyModal = ({children,isVisible, setIsVisible}) => {
    const classCurrent = [classes.myModal]
    if(isVisible) {
        classCurrent.push(classes.myModal__active)
    }
  return (
    <div className={ classCurrent.join(' ') } onClick={()=>setIsVisible(false)}>

        <div className={classes.myModal_content} onClick={(e)=>e.stopPropagation()}>
            {children}
        </div>
      
    </div>
  )
}

export default MyModal
