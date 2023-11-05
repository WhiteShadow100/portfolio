import React, { useContext } from 'react'
import { PortfolioContext } from '../Portfolio';

const Format = () => {

  const { elementList, setElementList, selectedElementId, setSelectedElementId } = useContext(PortfolioContext);
  
  return (
    <div className='format-container'>
      
    </div>
  )
}

export default Format
