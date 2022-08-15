import '../../App.css';
import { useEffect, useMemo, useState } from 'react';
import GoodsList from '../GoodsList';
import GoodsForm from '../GoodsForm';
import GoodsFilter from '../GoodsFilter';
import MyModal from '../UI/modal/MyModal';
import MyButton from '../UI/button/MyButton';
import useGoods from '../../hooks/useGoods';
import { PostService } from '../../API/PostService';
import MyLoader from '../UI/loader/MyLoader';
import useFetching from '../../hooks/useFetching';
import getPageCount from '../../utils/pages';
import { useRef } from 'react';
import Pagination from '../Pagination';
import useObserver from '../../hooks/useObserver';
import React from 'react'
import { CSSTransition } from "react-transition-group"


function Goods() {

  const [goods, setGoods] = useState([])

  const [filter, setFilter] = useState({ sort: '', query: '' })

  const [modal, setModal] = useState(false)

  const [totalPages, setTotalPages] = useState(0)

  const [limit, setLimit] = useState(10)

  const [page, setPage] = useState(1)


  const [isLoading, error, fetchPosts] = useFetching(async (limit, page) => {

    const response = await PostService.getAll(limit, page)
    setGoods([...goods,...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  const searchAndSortedGoods = useGoods(goods, filter.sort, filter.query)
  const lastElement = useRef();
    


  const addNewGood = (good) => {
    if (good.title !== '' || good.body !== '') {
      setGoods([...goods, { ...good, id: Date.now() }])
      setModal(false)
    }

  }

  const removeGood = (good) => {
    setGoods(goods.filter((g) => g.id !== good.id))

  }

  function changePage(page) {
    setPage(page);
  }

  useObserver(lastElement, isLoading, page < totalPages, () => {
    setPage ( page + 1 )
  })

  

  useEffect(() => { fetchPosts(limit, page) }, [page])



  return (
    <>

      <div className='activity'>
        <MyButton onClick={() => setModal(true)}>добавить товар</MyButton>
        <GoodsFilter
          filter={filter}
          setFilter={setFilter}
        />

      </div>


      <MyModal isVisible={modal} setIsVisible={setModal}>
        <GoodsForm createPost={addNewGood} />
      </MyModal>

      <hr style={{ margin: '10px' }}></hr>


      {
        error &&
        <h1>Произошла ошибка {error}</h1>
      }
      <GoodsList
            remove={removeGood}
            goods={searchAndSortedGoods}
            title='Список деталей'
          />

      {isLoading && 
      <MyLoader></MyLoader>
      }
      
{/*   // if pagination with hands control use this part
      <Pagination totalPages={totalPages} changePage={changePage} page={page} /> */}

      {/* if auto loading new pages that on */}
 
      <div ref={lastElement} style={{height:'10px',margin:'100px 0', color: 'teal'}}>
      </div>
      



    </>
  );
}

export default Goods;
