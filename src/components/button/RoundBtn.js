import React from 'react'
const style={
  border:0,
  borderRadius:50,
  padding:'8px 40px',
  fontSize:18,

}
function RoundLink({onClick,txt,bgco,txtColor}) {
  return (
    <button 
    style={{backgroundColor:bgco,color:txtColor,...style}}
    onClick={onClick}
    >
      {txt}
    </button>
  )
}

export default RoundLink