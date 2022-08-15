import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'

const GoodsFilter = ({filter, setFilter}) => {
  return (
    <div className='goods-filter'>

    <MyInput 
      onChange={(e)=>setFilter({...filter, query: e.target.value})}
      value={filter.query}
      placeholder='Поиск...'
    ></MyInput>

      <MySelect 
        defaultValue='Сортировака по:' 
            options={[
            { value: 'title', name: 'Сортировка по названию'},
            { value: 'body', name: 'Сортировка по описанию'},
            { value: '', name: 'Без сортировки'} ,      
            ]}
            
            value={filter.sort}
            sortGoods={(value)=>setFilter({...filter, sort: value})}
      >             
      </MySelect>
      
    </div>
  )
}

export default GoodsFilter
