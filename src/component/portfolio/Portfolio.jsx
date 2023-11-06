import React, { createContext, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Option from './component/Option';
import Format from './component/Format';
import Editor from './component/Editor';

const Portfolio = () => {

    const parentNodeId = useMemo(() => uuidv4(), []);

    // contains all the element that have been added to the page | initially adding parent node
    const [elementList, setElementList] = useState([{
        "id": parentNodeId,
        "parentId": null,
        "typeEnum": "parent",
        "label": "Parent",
        "element": ({children, id='', style={}}) => (<div id={`${id} portfolio-print`} style={{...style}} className='print-container'>{ children }</div>),
        "style": { zIndex: 0 },
    }])

    // holds the currently selected element
    const [selectedElementId, setSelectedElementId] = useState(null)



    // handled mouse click event
    function handleClick(element){        

        if(element.target.id == null || element.target.id == ''){ return }

        let elementIds = (''+element.target.id).split(' ')
        
        // if id is not presnet then return 
        if(elementIds.length <= 0){ return }

        let elementId = elementIds[0]

        setSelectedElementId(elementId)
    }    

    // unselects any selected element
    function unselectAll(){
        // changing the border color to default
        let temp = [...elementList]
        temp.forEach(tempElement => tempElement.style = {...tempElement.style, resize:'none', overflow: 'auto', border: '1px dashed black'})
        setElementList(temp)
    }

    // returns the index of selected element if found else returns -1
    function getSelectedIndex(){
        // initilaizing returning value
        let returnValue = -1

        // ececuted only when any element has been selected
        if(selectedElementId != null && selectedElementId != ''){
            // finding the index of selected element
            let index = elementList.findIndex(a => a.id == selectedElementId)
            // executed only when element is found
            if(index >= 0){
                returnValue = index
            }
        }

        return returnValue
    }



    // adding on click listener
    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])

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
            if(temp[index].typeEnum !== "parent"){
                temp[index].style = {...temp[index].style, resize:'both', overflow: 'auto', border: '2px solid blue'}
            }
            return temp
        })

    }, [selectedElementId])



    return (
        <PortfolioContext.Provider value={{
            parentNodeId: parentNodeId,
            elementList: elementList,
            setElementList: setElementList,
            selectedElementId: selectedElementId,
            setSelectedElementId: setSelectedElementId,
            getSelectedIndex: getSelectedIndex,
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
