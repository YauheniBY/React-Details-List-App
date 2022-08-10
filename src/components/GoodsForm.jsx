import React, { useState } from 'react'

import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput'

const GoodsForm = (props) => {
    const [post, setPost] = useState({title:'', body:''})
    const addNewPost = (e)=> {
        e.preventDefault()
        
        props.createPost(post)
        
        setPost({title:'', body:''})

  }
  return (
    <form>
        <MyInput 
          type='text' 
          value={post.title} 
          placeholder='Название' 
          onChange={(e)=>setPost({...post, title: e.target.value})}>          
        </MyInput>
        <MyInput 
          type='text' 
          placeholder='Описание' 
          value={post.body} 
          onChange={(e)=>setPost({...post, body: e.target.value})}>          
        </MyInput>
        <MyButton onClick={addNewPost}>создать новую запись</MyButton>
      </form>
  )
}

export default GoodsForm
