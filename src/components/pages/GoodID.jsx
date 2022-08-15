import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { PostService } from '../../API/PostService';
import useFetching from '../../hooks/useFetching';
import MyLoader from '../UI/loader/MyLoader';

const GoodID = () => {

  const params = useParams()
  const location = useLocation()


  const id = params.id;


  const [good, setGood] = useState({})
  const [comments, setComments] = useState([])

  const [isLoading, error, fetchGoodById] = useFetching(async (id) => {
    const response = await PostService.getByID(id)
    setGood(response.data)
  })

  const [isCommentsLoading, CommentsError, fetchCoommentsById] = useFetching(async (id) => {
    const response = await PostService.getCommentsByID(id)
    setComments(response.data)
  })

  useEffect(() => { 
    fetchGoodById(id)
    fetchCoommentsById(id)
   }, [])



  return (
    <>
      <h1 style={{display:'block', width:'70%', margin:'20px auto', fontWeight:'200'}}>Сраница Детали {id} </h1>
      {isLoading
        ? <MyLoader />
        :
        <div style={{width:'70%',margin:'20px auto', textTransform:'uppercase'}}>
          <h1 style={{ marginBottom:'30px'}}>{good.title}</h1>
          <h2 style={{fontStyle:'italic', color:'teal', marginBottom:'30px'}}>{good.body}</h2>
          <h3>Комментарии: </h3>
           {isCommentsLoading
            ? <MyLoader />
            : comments.map(com => 
                <div key={com.id} style={{marginTop: '20px'}} >
                  <h5>{com.name} {com.email}</h5>
                  <div style={{fontStyle:'italic', color:'teal', fontWeight:'300', marginBottom:'30px'}}>{com.body}</div>
                </div>
            )
          }
        </div>

      }

      
    </>


  )
}

export default GoodID
