import React from 'react'

const Container = ({children}) => {
  return (
    <div className='md:w-[1320px] mx-auto px-4 md:px-0'>
        {children}
    </div>
  )
}

export default Container