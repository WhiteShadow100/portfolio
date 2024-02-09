import React, { createContext, useEffect, useMemo, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Option from './component/Option';
import Format from './component/Format';
import Editor from './component/Editor';

const Portfolio = () => {

    const parentNodeId = useMemo(() => uuidv4(), []);

    // referenceing the parent container
    const ref_parentNode = useRef(null);

    // holds the currently selected element
    const [selectedElementId, setSelectedElementId] = useState(null)

    // contains all the element that have been added to the page | initially adding parent node
    const [elementList, setElementList] = useState([{
        "id": parentNodeId,
        "parentId": null,
        "typeEnum": "parent",
        "label": "Parent",
        "element": ({children, id='', style={}}) => (<div ref={ref_parentNode} id={`${id} portfolio-print`} style={{...style, position: 'relative'}} className='print-container' onDragOver={(e) => { e.preventDefault() }}>{ children }</div>),
        "style": { zIndex: 0 },
    }])

    // holds mosue offset
    const [mouseOffset, setMouseOffset] = useState({x: 0, y: 0})

    
    // handled mouse click event
    function handleClick(element){   
        
        if(element.target.id == null || element.target.id == ''){ return }

        let elementIds = (''+element.target.id).split(' ')
        
        // if id is not presnet then return 
        if(elementIds.length <= 0){ return }

        let elementId = elementIds[0]

        console.log("This is elemet offset x => ", element.offsetX, "This is eleemnt offset y => ", element.offsetY) 

        // setting the mouse offset in selected element
        setMouseOffset(pre => (
            {
                x: element.offsetX,
                y: element.offsetY
            }
        ))

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

    // handles drag event
    function handleDrag(event){
        console.log("This is from drag event => ", event)
        setSelectedElementId(event?.target?.id)
    }

    function handleDrop(e){

        // trying to get mouse offset
        console.log("This is drop event => ", e)
        console.log("This is client x => ", e.clientX, "This is client y => ", e.clientY) 
        console.log("This is offset x => ", e.offsetX, "This is offset y => ", e.offsetY) 
        console.log("This is new x => ", (e.clientX - e.offsetX), "This is new y => ", (e.clientY - e.offsetY)) 
        console.log("This is mouse offset", mouseOffset.x, "This is mouse offset y => ", mouseOffset.y) 

        setElementList(pre => {
            let temp = [...pre]

            let tempIndex= temp.findIndex(a => a.id == selectedElementId)
            
            if(tempIndex == -1){ return temp }

            temp[tempIndex].style["top"] = (e.offsetY) + 'px'
            temp[tempIndex].style["left"] = (e.offsetX) + 'px'

            return temp
        })
    }



    // adding on click listener | on document
    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, [])


    // adding drop event handler to parent node
    useEffect(() => {

        if(selectedElementId == null || selectedElementId == ''){ return }

        if(ref_parentNode == null && ref_parentNode.current == null){ return }

        ref_parentNode.current.addEventListener('drop', handleDrop)

        return (() => {
            ref_parentNode.current.removeEventListener('drop', handleDrop)
        })

    }, [selectedElementId])

    // adding on drag and on drop listener
    useEffect(() => {
        let elements = document.getElementsByClassName('portfolio-component')

        for(let element of elements){
            element.addEventListener('dragstart', handleDrag)
        }        

        return () => {
            for(let element of elements){
                element.removeEventListener('dragstart', handleDrag)
            }
        }
    }, [elementList])

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


    // test
    useEffect(() => {
        console.log("This is mnouse offset etst => ", mouseOffset)
    }, [mouseOffset])


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
