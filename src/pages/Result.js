import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import ResultList from '../components/ResultList';
import ResultChart from '../components/ResultChart';

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
  const [data,setData]=useState({});
  const [color, setColor] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:8080/stock/${keyword.state.title}`)
      .then(res => {
        setData(res.data)
      }).catch(error => {
        console.log(error)
      });
    switch (keyword.state.title) {
      case '반도체': setColor('237, 142, 142'); break;
      case '영업이익': setColor('247, 245, 161'); break;
      case '상한가': setColor('187, 198, 242'); break;
      case '자동차': setColor('217, 194, 240'); break;
      default :setColor('173, 179, 255');
    }
  }, [])

  return (
    <div className='bg-gray'>
      <div className="layout">
        <h1 className='title'>분석결과</h1>
        <div style={style.box}>
          <ResultChart chartData={data.answer}/>
        </div>
        <div style={style.box}>
          <ResultList data={data.sentence} bgColor={color} />
        </div>
      </div>
    </div>
  )
}

export default Result