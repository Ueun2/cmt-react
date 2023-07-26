import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/style/Button.module.css'

function RoundLink({link,state=null,txt,bgco,txtColor}) {
  const style={
    backgroundColor:bgco,
    color:txtColor
  }
  return (
    <div>
      <Link 
        to={link}
        state={state}
        style={style}
        className={styles.roundLink}
      >
        {txt}
      </Link>
    </div>
  )
}

export default RoundLink