import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import ResultList from '../components/ResultList';

const style = {
  box: {
    borderRadius: '10px',
    border: '1px solid #bbb',
    background: ' #fff',
    padding: ' 30px',
    marginBottom: '20px'
  }
}


function Result () {
  const keyword = useLocation();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/stock/${keyword.state.title}`)
      .then(res => {
        setData(res.data.sentence);
        console.log(res.data.sentence)
      }).catch(error => {
        console.log(error)
      });
  }, [])

  return (
    <div className='bg-gray'>
      <div className="layout">
        <h1 className='title'>분석결과</h1>
        <div style={style.box}>
        </div>
        <div style={style.box}>
            < ResultList data={data}/>
        </div>
      </div>
    </div>
  )
}

export default Result