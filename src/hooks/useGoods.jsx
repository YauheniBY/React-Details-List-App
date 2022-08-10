import React, { useMemo } from 'react'

const useSortedGoods = (goods, sort)=>{


  const sortedGoods = useMemo(()=>{
    
  if (sort){
    return [...goods].sort( (a,b) => a[sort].localeCompare(b[sort]))
  }    
    return goods;
}, [goods, sort])

return sortedGoods

}

const useGoods = (goods, sort, query) => {

  const sortedGoods = useSortedGoods(goods, sort)

  const searchAndSortedGoods = useMemo(()=> {

    return sortedGoods.filter( good => (good.title.toLowerCase().includes(query) || good.body.toLowerCase().includes(query)))
  }, [goods, sortedGoods, query])

  return searchAndSortedGoods
}

export default useGoods
