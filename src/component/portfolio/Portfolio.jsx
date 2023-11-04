import React, { createContext, useEffect, useRef, useState } from 'react'
import Option from './component/Option';
import Format from './component/Format';
import Editor from './component/Editor';

const Portfolio = () => {

    // contains all the element that have been added to the page
    const [elementList, setElementList] = useState([])

    return (
        <PortfolioContext.Provider value={{
            elementList: elementList,
            setElementList: setElementList
        }}>
            <div className='portfolio-container'>
                <Option />

                <Editor />

                <Format />
            </div>
        </PortfolioContext.Provider>
    )
}

export default Portfolio
export const PortfolioContext = createContext();
