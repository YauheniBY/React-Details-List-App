import React, { useEffect } from 'react'
import { useRef } from 'react'

const useObserver = (ref, isLoading,  canLoad,  callback) => {
    const observer = useRef();
    
    useEffect(()=> {

        
        if(isLoading) return
        if(observer.current) observer.current.disconnect()
    
        
        const cb = (entries, observer) => {
    
          
        
          if(entries[0].isIntersecting && canLoad){
            callback()
          }
        }
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
        
    
      }, [isLoading])
}

export default useObserver
