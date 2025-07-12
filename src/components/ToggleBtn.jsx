import React from 'react'


const ToggleBtn = ({isOn,onToggle}) => {

  return (
    <div onClick={onToggle} className={`w-12 h-7 bg-btn rounded-full cursor-pointer relative transition-colors duration-300 ${
        isOn ? 'bg-primary' : 'bg-btn'}`}>
      <div className={`w-5 h-5 bg-white rounded-full absolute top-1 left-1 transition-transform duration-300 
        ${isOn ? 'translate-x-5' : 'translate-x-0'}`}></div>
    </div>
  );
}

export default ToggleBtn