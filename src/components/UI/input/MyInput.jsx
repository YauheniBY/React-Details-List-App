import React from 'react'
import classes from './MyInput.module.css'

const MyInput = (props) => {
  return (
    <input onClick={(e) =>e.preventDefault()} className={classes.myInput} {...props}/>
  )
}

export default MyInput
