import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';
import ResultList from '../components/ResultList';
import ResultChart from '../components/ResultChart';
import Loading from '../components/Loading';

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
  const [loading,setLoding]=useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8080/stock/${keyword.state.title}`)
      .then(res => {
        setData(res.data);
        setLoding(prev=>!prev);
      }).catch(error => {
        console.log(error)
      });
    switch (keyword.state.title) {
      case '반도체': setColor('233, 119, 119'); break;
      case '영업이익': setColor('231, 177, 10'); break;
      case '상한가': setColor('116, 132, 191'); break;
      case '자동차': setColor('162, 100, 166'); break;
      default :setColor('173, 179, 255');
    }
  }, [])
  return (
    <div className='bg-gray'>
      <div className="layout">
        <h1 className='title'>분석결과</h1>
        <div style={style.box}>
          {loading ? <ResultChart chartData={data.answer}/> : <Loading/>}
        </div>
        <div style={style.box}>
          {loading ? <ResultList data={data.sentence} bgColor={color} />:<Loading/>}
        </div>
      </div>
    </div>
  )
}

export default Result