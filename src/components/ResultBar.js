import React,{useState,useEffect} from 'react'
import { Bar } from '@ant-design/plots';

export default function ResultBar({ chartData=[] }) {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(chartData)
  })
  const config = {
    data,
    xField: 'score',
    yField: 'stock',
    seriesField: 'score',
    legend: {
      position: 'top-left',
    },
    maxBarWidth:20,
  };
  return <Bar {...config} />;
}
