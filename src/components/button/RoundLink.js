import React from 'react'
import { Link } from 'react-router-dom'
const style={
  border:0,
  borderRadius:50,
  padding:'8px 40px',
  fontSize:18,

}
function RoundLink({link,state=null,txt,bgco,txtColor}) {
  return (
    <button style={{backgroundColor:bgco,color:txtColor,...style}}>
      <Link 
        to={link}
        state={state}
      >
        {txt}
      </Link>
    </button>
  )
}

export default RoundLink