import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate, useLocation } from 'react-router-dom';

const GoodsItem = ({good, remove}) => {

  const location = useLocation()

 
   

  const navigate = useNavigate()


  const toIdPage = (id)=> {
    navigate(`${location.pathname}/${id}`)
  }

  return (
    <div className='goodsItem'>
        <div className='goodsItem_element'>
            <div className='goodsItem_text'>
                <p className='goodsItem_id'>{good.id}</p>
                <strong className='goodsItem_title'>{good.title}</strong>
            </div>
            <div className='goodsItem_text'>            
                <p className='goodsItem_body'>{good.body}</p>
            </div>

        </div>
      
      <div>
      <MyButton onClick={()=>{ toIdPage(good.id)}}>Открыть</MyButton>
        <MyButton onClick={()=>{remove(good)}}>Удалить</MyButton>
      </div>      
    </div>
    )
  
}

export default GoodsItem
