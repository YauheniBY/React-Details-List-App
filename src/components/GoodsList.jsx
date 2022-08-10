import React from 'react'
import GoodsItem from './GoodsItem'
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';



const GoodsList = ({goods, title, remove}) => {
 

    if(goods.length){
        return (
            
                <div className='goodsList'>
                    <h1>{title}</h1>
                    
                    <TransitionGroup>
                        {goods.map( (good, index) =>

                            <CSSTransition
                                key={good.id}
                                timeout={500}
                                classNames="good"
                            >
                                    <GoodsItem remove={remove} good={good} number={index + 1} />
                            </CSSTransition>
                        )}
                    </TransitionGroup>
                       
                   
                   
                   
                </div>
            
        )
        
    }
    return <h1 style={{textAlign: 'center', marginTop: '30px'}}>Детали не найдены!</h1>
}

export default GoodsList
