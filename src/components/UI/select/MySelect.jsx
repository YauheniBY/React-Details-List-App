import React from 'react'
import classes from './MySelect.module.css'

const MySelect = ({ options,defaultValue, sortValue, sortGoods }) => {
  return (
    <select className={classes.mySelect}
        value={sortValue} 
        onChange={(e)=>sortGoods(e.target.value)}
    >
        <option className={classes.mySelect_option} hidden value=''>{defaultValue}</option>
        {
            options.map((option) => {
                return <option className={classes.mySelect_option} value={option.value} key={option.value}>{option.name}</option>
            })
        }
      </select>
  )
}

export default MySelect
