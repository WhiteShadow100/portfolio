import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../Portfolio'
import { v4 as uuidv4 } from 'uuid';

const Option = () => {

    const { parentNodeId, elementList, setElementList, selectedElementId, setSelectedElementId, getSelectedIndex } = useContext(PortfolioContext);

    const [isShowOption, setIsShowOption] = useState(false)

    // valid option object
    const option = [
        {
            "id": uuidv4(),
            "parentId": null,
            "typeEnum": "text",
            "label": "Text",
            "element": ({id='', style={}, className=''}) => (<textarea id={id} type="text" draggable={true} style={{...style}} className={`${className} portfolio-component input-txt`} />),
            "style": { resize: 'none', position: 'relative', width: '100px', maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box', zIndex: elementList.length, backgroundColor: '#ffffff', border: '1px dashed black' },
        },
        {
            "id": uuidv4(),
            "parentId": null,
            "typeEnum": "div",
            "label": "Area",
            "element": ({children = <></>, id='', style={}, className=''}) => (<div id={id} type="text" draggable={true} style={{...style}} className={`${className} portfolio-component`} onDragStart={(e => { setSelectedElementId(e.target.id);  console.log(e.target.id); })}>{ children }</div>),
            "style": { overflow: 'auto', position: 'absolute', width: '100px', height: '100px', maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box', border: '1px dashed black', zIndex: elementList.length, backgroundColor: '#ffffff' },
            "children": []
        }
    ]


    // add element to element list according to selected option
    function addElement(type){

        // if proper type is not received return
        if(type == null || type == ''){ return }

        // finding the elemnt data 
        let typeData = option.filter(a => a.typeEnum == type)

        // if type data is not found return1
        if(typeData.length <= 0){ return }

        // getting index of selected element
        let tempSelectedIndex = getSelectedIndex()

        // getting type data
        let tempTypeData = typeData[0] 

        // Note:  parentId is currently not in used, added in for phase-2

        // when element is being created on another div
        if(tempSelectedIndex >= 0 && elementList[tempSelectedIndex].typeEnum == "div"){
            // dont remove following comment | it is used for adding chikd to selected element
            /*****************************************************************************************************
            // setElementList(pre => {
            //     let tempData = [...pre]
            //     tempData.map((temp, index) => {
            //         if(index == tempSelectedIndex){
            //             temp.children = [...temp.children, typeData[0]]
            //         }
            //         return temp;
            //     })
            //     return tempData
            // })
            ****************************************************************************************************/
            // setting parent id
            tempTypeData.parentId = selectedElementId

            setElementList(pre => ([...pre, tempTypeData]))
        }
        // when element is being creted on the parent node
        else{
            // setting parent id
            tempTypeData.parentId = parentNodeId

            // adding type data
            setElementList(pre => ([...pre, tempTypeData]))
        }
        
    }


    return (
        <>
            <div className='option-container'>
                {
                    option.map(temp => (
                        <button key={temp.id} onClick={() => { addElement(temp.typeEnum) }}>{temp.label}</button>
                    ))
                }
            </div>
        </>
    )
}

export default Option
