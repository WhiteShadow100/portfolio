import React, { useContext, useState } from 'react'
import { PortfolioContext } from '../Portfolio'

const Option = () => {

    const { elementList, setElementList } = useContext(PortfolioContext);

    const [isShowOption, setIsShowOption] = useState(false)

    // valid option object
    const option = {
        "text": <input type="text" style={{resize:'both'}} />
    }

    // add element to element list according to selected option
    function addElement(type){
        setElementList(pre => ([...pre, option[type]]))
    }

    return (
        <>
            
            {/* <input className='option-btn open' type='button' value={'Open'} onClick={() => {
                setIsShowOption(!isShowOption)
            }} /> */}

            {
                true ? (
                    <div className='option-container'>
                        <button onClick={() => { addElement("text") }}>Text</button>
                    </div>
                ) : (
                    <></>
                )
            }
        </>
    )
}

export default Option
