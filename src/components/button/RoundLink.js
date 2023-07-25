import React from 'react'
import { Link } from 'react-router-dom'
const style={
  border:0,
  borderRadius:50,
  padding:'8px 60px',
  fontSize:18,
  display:'inline-block'
}
function RoundLink({link,state=null,txt,bgco,txtColor}) {
  return (
    <div>
      <Link 
        to={link}
        state={state}
        style={{backgroundColor:bgco,color:txtColor,...style}}
      >
        {txt}
      </Link>
    </div>
  )
}

export default RoundLink