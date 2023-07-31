import React from 'react'
import ResultBar from './ResultBar'
const styles = {
  box:{
    background:'#f7f8f8',
    borderRadius:'10px',
    padding:'20px',
    marginBottom:'10px'
  },
  sentence: {
    fontSize: '18px',
    marginBottom: '10px'
  },
  chart: {
    border:'1px solid #d2d2d2',
    padding : '20px 10px',
    borderRadius:'10px'
  }
}
export default function ResultBarList({ data =[]}) {
  return (
    data.map((list, idx) => (
      <div key={idx} style={styles.box}>
        <p style={styles.sentence}>{list.sentence}</p>
        <div style={styles.chart}>
          {list.condition.length > 0 ? <ResultBar chartData={list.condition} /> : <p>데이터 없음</p>}
        </div>
      </div>
    ))
  )
}
