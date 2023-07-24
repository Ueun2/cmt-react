import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import style from '../assets/style/Result.module.css'


function Result () {
  const keyword = useLocation();
  const [data, setData] = useState(false);
  useEffect(() => {
    axios.get(`http://localhost:8080/stock/${keyword.state.title}`).then(function (res) {
      setData(res.data);
    });
  }, [keyword])
  console.log(data)


  return (
    data ?
      <div className='layout'>
        <div className=''>
          {data.answer.map((item, idx) => (
            <div key={idx}>
              <p>{item.stock}</p>
              <p>점수 : {item.score}</p>
            </div>
          ))}
        </div>
        <div className={style.box}>
          {data.sentence.map((item, idx) => (
            <div key={idx} style={{ background: `rgba(136, 117, 174,${item.condition[0].score})` }} >
              <p>{item.sentence}</p>
              <div className='flex jc-e' >
                <p>{item.condition[0].stock}</p>
                <p>{(item.condition[0].score * 100).toFixed(0)}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      : ''
  )
}

export default Result