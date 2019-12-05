import React from 'react';
// import './rpgui.css'

const Instruction = () => {
  return (
    <div className="rpgui-content">
      <div className="rpgui-container framed-golden"
        style={{
          color:"white",
          textAlign: "center",
          wordWrap: "break-word",
          height: "50%",
          maxWidth: "11%"
        }}>
        Arrow Keys to move
        Z to interact
      </div>
    </div>
  )
}

export default Instruction
