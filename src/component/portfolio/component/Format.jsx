import React, { useContext, useEffect, useState } from 'react'
import { PortfolioContext } from '../Portfolio';

const Format = () => {

  const { parentNodeId, elementList, setElementList, selectedElementId, setSelectedElementId, getSelectedIndex } = useContext(PortfolioContext);


  // initializing state
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  // holds recent five color selected by the use | by default all are transparent
  const [recentBgColorList, setRecentBgColorList] = useState(['none', 'none', 'none', 'none', 'none'])



  // deletes the currently selected element
  function deleteElement(){

    // getting the index of selected element
    let index = getSelectedIndex();

    // if not found then return 
    if(index < 0){ return }

    // checking if deleteing elemnt is parent node
    if(elementList[index].typeEnum === "parent"){
      return 
    }

    // deleting the element
    setElementList(pre => {
      let temp = [...pre]
      temp = temp.filter((tempElement, tempIndex) => {
        if(tempIndex != index){
          return tempElement
        }
      })
      return temp
    })
  }

  // handles the selected color | for background
  function handleBackgroundColor(event){
    // selected background color
    let color = event.target.value;

    // getting the index of selected element
    let index = getSelectedIndex();

    // if not found then return 
    if(index < 0){ return }

    setBackgroundColor(color)

    // setting the backgroud color of 
    setElementList(pre => {
      let temp = [...pre]
      temp = temp.filter((tempElement, tempIndex) => {
        if(tempIndex == index){
          tempElement.style = { ...tempElement.style, backgroundColor: color }
        }
        return tempElement
      })
      return temp
    })
  }

  // adding changed color to recent list
  function addRecentBackground(event){    
    console.log("This is new color value => ", event.target.value)
  }
  

  // changing selected background color according to selected elements background color
  useEffect(() => {

    // getting selected elemnts index
    let index = getSelectedIndex();

    // initializing elements background color
    let elementBackgroundColor = '#ffffff';

    if(index >= 0){
      elementBackgroundColor = elementList[index]?.style["backgroundColor"] || '#ffffff'
    }

    setBackgroundColor(elementBackgroundColor)

  }, [selectedElementId])



  return (
    <div className='format-container'>
      <button onClick={deleteElement}>Delete</button>
      <div className=''>
        <label>Background Color: </label>
        <input 
          type='color'
          value={backgroundColor}
          onChange={(e) => {
            handleBackgroundColor(e)
          }}
          onSubmit={(e) => {
            addRecentBackground(e)
          }}
        />

      </div>
    </div>
  )
}

export default Format
