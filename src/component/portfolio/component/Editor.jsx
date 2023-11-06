import React, { memo, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { PortfolioContext } from '../Portfolio';

const Editor = () => {

    const ref_box1 = useRef();
    const ref_box2 = useRef();

    const { parentNodeId, elementList, setElementList, selectedElementId, setSelectedElementId, getSelectedIndex } = useContext(PortfolioContext);


    // holds the list of formatted element
    const [formattedElementList, setFormattedElementList] = useState([])


    function dragHandler(element){

        console.log("This is element => ", element)

        if(ref_box2 != null && ref_box2.current != null){
            ref_box2.current.addEventListener('dragover', function(e){
                e.preventDefault()
            })

            ref_box2.current.addEventListener('drop', function(e){
                console.log("This is ref box 2 data => ", ref_box2.current)
                console.log("This is element => ", element.target)
                ref_box2.current.appendChild(element.target)
            })
        }
    
        if(ref_box1 != null && ref_box1.current != null){
            ref_box1.current.addEventListener('dragover', function(e){
                e.preventDefault()
            })

            ref_box1.current.addEventListener('drop', function(e){
                console.log("This is ref box 2 data => ", ref_box1.current)
                console.log("This is element => ", element.target)
                ref_box1.current.appendChild(element.target)
            })
        }
    }


    // formats the received data and converts it into an element 
    const CreateNode = useCallback(({ nodeData }) => {        

        let Node = nodeData.element;

        if(nodeData.typeEnum == "div"){
            if(nodeData.children != null && nodeData.children != '' && Array.isArray(nodeData.children) && nodeData.children.length > 0){
                return (
                    <Node id={nodeData.id} style={{...nodeData.style}}>
                        {
                            (nodeData.children || []).map(tempChild => {
                                return (<CreateNode key={tempChild.id} id={tempChild.id} nodeData={tempChild} />)
                            })
                        }
                    </Node>
                )
            }
        }

        return (<Node id={nodeData.id} style={{...nodeData.style}} />)
    }, [])

    const parentNodeData = elementList.filter(a => a.typeEnum === "parent")?.[0]
    const ParentNode = parentNodeData?.element



    useEffect(() => {
        if(elementList == null || elementList == '' || !Array.isArray(elementList) || elementList.length <= 0){ return }

        let allElement = [...elementList]
        let includedElement = []

        // while(allElement.length <= 0){
        allElement.forEach(a => {
            if(a.parentId == parentNodeId){
                includedElement.push(a)
            }
        })
        
        setFormattedElementList(allElement)
    }, [elementList])


    return (
        <div className='editor-container' key={'test'}>

            {/* <div id="portfolio-print" className='print-container'> */}
                {/* <div ref={ref_box1} style={{border: '1px dashed black', color: 'white', height: '500px', width: '400px', display: 'inline-block', resize: 'both', overflow: 'auto', maxWidth: '700px'}} className='box-1'>
                    <div style={{border: '1px solid black', marginBottom: '5px', backgroundColor: 'red'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}><input type='text' /></div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                </div> */}

                {/* <div ref={ref_box2} style={{border: '1px dashed black', color: 'white', height: '500px', width: '400px', resize: 'both', overflow: 'auto'}} className='box-2'> */}
                <ParentNode key={parentNodeData.id} id={parentNodeData.id} style={parentNodeData.style}>
                    {
                        elementList.filter(a => a.typeEnum != "parent").map(node => {
                            return <CreateNode key={node.id} nodeData={node} />
                        })
                    }
                </ParentNode>
                {/* </div> */}
            {/* </div> */}
        </div>
    )
}

export default Editor
