import React, { useContext, useRef } from 'react'
import { PortfolioContext } from '../Portfolio';

const Editor = () => {

    const ref_box1 = useRef();
    const ref_box2 = useRef();

    const { elementList, setElementList, selectedElementId, setSelectedElementId } = useContext(PortfolioContext);

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

    return (
        <div className='editor-container'>

            <div id="portfolio-print" className='print-container'>
                {/* <div ref={ref_box1} style={{border: '1px dashed black', color: 'white', height: '500px', width: '400px', display: 'inline-block', resize: 'both', overflow: 'auto', maxWidth: '700px'}} className='box-1'>
                    <div style={{border: '1px solid black', marginBottom: '5px', backgroundColor: 'red'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}><input type='text' /></div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                    <div style={{border: '1px solid black', marginBottom: '5px'}} draggable={true} className='portfolio-dragable-item' onDragStart={(e) => { dragHandler(e) }}>Hello</div>
                </div> */}

                {/* <div ref={ref_box2} style={{border: '1px dashed black', color: 'white', height: '500px', width: '400px', resize: 'both', overflow: 'auto'}} className='box-2'> */}
                    {
                        elementList.map(temp => {
                            let Temp = temp.element;

                            console.log("This is id => ", temp.id)

                            return (<Temp key={temp.id} id={temp.id} style={{...temp.style}} />)
                        })
                    }
                {/* </div> */}
            </div>
        </div>
    )
}

export default Editor
