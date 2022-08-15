import React, { useMemo } from 'react'

const usePagination = (totalPages) => {

    const pagesArray = useMemo(() => {

        let pagesArr = []
        for(let i = 0; i < totalPages ; i++){
          pagesArr.push( i + 1 )
        }
    
        return pagesArr
    
    
      }, [totalPages])

    
  return pagesArray
  
}

export default usePagination
