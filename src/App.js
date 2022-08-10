import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';
import GoodsList from './components/GoodsList';
import GoodsForm from './components/GoodsForm';
import GoodsFilter from './components/GoodsFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import useGoods from './hooks/useGoods';
import {PostService} from './API/PostService';
import MyLoader from './components/UI/loader/MyLoader';
import UseFetching from './hooks/UseFetching';


function App() {

  const [goods, setGoods] = useState([])
  const [isLoading, error, fetchPosts] = UseFetching(async () => {
    const response = await PostService.getAll()
    setGoods(response)
  })
  

  const addNewGood = (good) => {
    if(good.title !== '' || good.body !== ''){
      setGoods([...goods, {...good, id: Date.now()}])
      setModal(false)
    }
   
  }

  const removeGood = (good) => {
    setGoods(goods.filter((g) => g.id !== good.id))

  }

  const [filter, setFilter] = useState({sort:'', query:''})

  const [modal, setModal] = useState(false)

  const searchAndSortedGoods = useGoods(goods,  filter.sort, filter.query)

  
  

  useEffect(()=>{ 
    fetchPosts()
  }, [])

  


  return (
  <>

  <MyButton onClick={()=>setModal(true)}>добавить товар</MyButton>
  <MyModal isVisible={modal} setIsVisible={setModal}>
  <GoodsForm 
      createPost={addNewGood}

      />
  </MyModal>
  
    
    

    <hr style={{margin:'10px'}}></hr>

    <GoodsFilter 
      filter={filter} 
      setFilter={setFilter}
    />
    {
      error &&
        <h1>Произошла ошибка {error}</h1>
      
    }
    {
      isLoading
      ? <MyLoader></MyLoader>
      :<GoodsList 
        remove={removeGood} 
        goods={searchAndSortedGoods} 
        title='Список деталей'   
      />

    }

    
        
  </>    
        
  );
}

export default App;
