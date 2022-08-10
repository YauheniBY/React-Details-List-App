import React from 'react'
import MyButton from './UI/button/MyButton'

const GoodsItem = ({good, number, remove}) => {
  return (
    <div className='goodsItem'>
        <div className='goodsItem_element'>
            <div className='goodsItem_text'>
                <p className='goodsItem_id'>{number}</p>
                <strong className='goodsItem_title'>{good.title}</strong>
            </div>
            <div className='goodsItem_text'>            
                <p className='goodsItem_body'>{good.body}</p>
            </div>

        </div>
      
      <div>
        <MyButton onClick={()=>{remove(good)}}>Удалить</MyButton>
      </div>      
    </div>
    )
  
}

export default GoodsItem
