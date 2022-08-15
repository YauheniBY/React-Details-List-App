import React from 'react'
import usePagination from '../hooks/usePagination'

const Pagination = ({totalPages, page, changePage} ) => {

    const pagesArray = usePagination( totalPages )
  return (
    <div className='pagesNavigation'>
     {
      pagesArray.map( p => 
        <span 
          key={p} 
          className={page == p ? 'pagesNavigation_element pagesNavigation_element__active' : 'pagesNavigation_element'} 
          onClick={()=>{changePage(p)}}>
          {p}
          </span>
      )
    }
    </div>
  )
}

export default Pagination
