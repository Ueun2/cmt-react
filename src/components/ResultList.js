import React, { useState } from 'react'
import style from '../assets/style/ResultList.module.css'


function ResultList ({ data=[] ,bgColor}) {
  return (
    data.map((list, idx) => {
      const condition = list.condition.sort((a, b) => b.score - a.score)[0] || { stock: '', score: 0 }
      return (
        <div key={idx} style={{
          background: `rgba(${bgColor},${condition.score})`
        }} className={style.box}>
          <p className={style.sentence}>{list.sentence}</p>
          <p className={style.condition}>
            <span className={style.stock}>{condition.stock}</span>
            {condition.score > 0 ?
              <span className={style.score}>{(condition.score * 100).toFixed(0)}%</span> : ''}
          </p>
        </div>
      )
    })
  )
}

export default ResultList