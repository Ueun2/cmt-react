import React, { useEffect, useState } from 'react'
import { Pie } from '@ant-design/charts'

function ResultChart ({ chartData = [] }) {
  const [data,setData]=useState([])
  useEffect(()=>{
    setData(chartData)
  })
  const config = {
    appendPadding: 10,
    data,
    angleField: 'score',
    colorField: 'stock',
    color:['#7484bf', '#f1e577', '#a264a6'],
    radius: 0.9,
    label: {
      type: 'inner',
      offset: '-42%',
      content: ({ percent,stock}) => `${(percent * 100).toFixed(0)}%(${stock})`,
      style: {
        fontSize: 14,
        textAlign: 'center',
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return  <Pie {...config} />;
}

export default ResultChart