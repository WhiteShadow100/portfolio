import React, { createContext, useEffect, useRef, useState } from 'react'
import Option from './component/Option';
import Format from './component/Format';
import Editor from './component/Editor';

const Portfolio = () => {

    // contains all the element that have been added to the page
    const [elementList, setElementList] = useState([])
    // holds the currently selected element
    const [selectedElementId, setSelectedElementId] = useState(null)

    // handled mouse click event
    function handleClick(element){
        setSelectedElementId(element.target.id == '' ? null : element.target.id)
    }

    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

    // unselects any selected element
    function unselectAll(){
        // changing the border color to default
        let temp = [...elementList]
        temp.forEach(tempElement => tempElement.style = {...tempElement.style, resize:'none', overflow: 'auto', border: '1px dashed black'})
        setElementList(temp)
    }


    // changes the border style of selected item
    useEffect(() => {

        // unselecting any selected element
        unselectAll()

        // return if no item has been selected
        if(selectedElementId == null || selectedElementId == '') { return }

        // finding the index of seleted element
        let index = elementList.findIndex(a => a.id == selectedElementId)

        // return if element is not found
        if(index < 0){ return }

        // changing the border color of selected element
        setElementList(pre => {
            let temp = [...pre]
            console.log("This is temp => ", temp)
            temp[index].style = {...temp[index].style, resize:'both', overflow: 'auto', border: '2px solid blue'}
            return temp
        })

    }, [selectedElementId])

    return (
        <PortfolioContext.Provider value={{
            elementList: elementList,
            setElementList: setElementList,
            selectedElementId: selectedElementId,
            setSelectedElementId: setSelectedElementId
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
