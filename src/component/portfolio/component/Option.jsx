import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../Portfolio'
import { v4 as uuidv4 } from 'uuid';

const Option = () => {

    const { elementList, setElementList, selectedElementId, setSelectedElementId } = useContext(PortfolioContext);

    const [isShowOption, setIsShowOption] = useState(false)

    // valid option object
    const option = [
        {
            "id": uuidv4(),
            "typeEnum": "text",
            "label": "Text",
            "element": ({id, style}) => (<textarea id={id} type="text" style={{...style}} className='input-txt' />),
            "style": {resize:'both', overflow: 'auto', width: '100px', maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box'},
        },
        {
            "id": uuidv4(),
            "typeEnum": "area",
            "label": "Area",
            "element": ({id, style}) => (<div id={id} type="text" style={{...style}} />),
            "style": {resize:'both', overflow: 'auto', width: '100px', height: '100px', maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box', border: '1px dashed black'},
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

        // adding type data
        setElementList(pre => ([...pre, typeData[0]]))
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
