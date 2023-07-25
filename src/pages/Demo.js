import React, { useState, useEffect } from 'react';
import { Button, TextField, ButtonGroup } from '@mui/material';
import { Box, createTheme } from '@mui/system';
import RoundLink from '../components/button/RoundLink'
import axios from 'axios';
import style from '../assets/style/Demo.module.css';
export default function () {
  const keywords = ['반도체', '영업이익', '상한가', '자동차']; // 키워드 목록
  const [title, setTitle] = useState(''); // 뉴스 제목 초기값
  const [contents, setContents] = useState(''); // 뉴스 본문 초기값
  const [value, setValue] = useState('반도체');
  const theme = createTheme({
    palette: {
      btnOn:{
        backgroundColor:' #f7f7ff',
        color: '#fff',
        fontWeight: 'bold'
      }
    },
  });
  // TODO 1 : 뉴스 제목과 본문 입력 된 상태로 랜더링 
  useEffect(() => {
    axios.get(`http://localhost:8080/news/${value}`).then(function (res) {
      console.log(res)
      setTitle(res.data.title);
      setContents(res.data.content)
    });
  }, [value])
  return (
    <div className='layout'>
      <ButtonGroup
        variant="outlined"
        ria-label="outlined primary button group"
        sx={{
          display: 'block',
          textAlign: 'left',
          mt: 10,
        }}
      >
        {keywords.map((btn, idx) => (
          <Button
            className={btn === value ? style.btnOn : ''}
            key={idx}
            sx={{
              color: '#7484bf',
              borderColor: '#7484bf',
              '&.MuiButton-root:hover': {
                border: '1px solid #8875AE',
                color: '#8875AE',
                bgcolor: '#faf7ff'
              }
            }}
            onClick={() => { setValue(btn); }}
          >
            {btn}
          </Button>
        ))}
      </ButtonGroup>

      <Box
        sx={{
          border: 2,
          borderRadius: 2,
          my: 3,
          p: 5,
          borderColor: '#7484bf',
          bgcolor:"#f5f5f8"
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          variant="standard"
          value={title}
          fullWidth
          sx={{
            "& .MuiInput-underline:after": {
              borderBottom: 0
            },
            '& .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '1px solid rgba(0, 0, 0, 0.42)'
            },
            '& .MuiInputBase-root:before': {
              borderBottom: '1px solid #d2d2d2'
            },
            '& input': {
              fontSize:20,
              fontWeight:'bold',
              pb:2
            }
          }}
        />
        <TextField
          id="outlined-basic"
          value={contents}
          multiline
          fullWidth
          sx={{
            border: 0,
            '& .MuiOutlinedInput-root': {
              '& fieldset,&:hover fieldset,&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            }
          }}
        />
      </Box>


      {/* TODO 4 : 버튼 클릭 시 result 페이지로 이동*/}
      <Box
        sx={{
          textAlign: 'center',
          my: 5
        }}
      >
        <RoundLink
          txt='결과 분석하기'
          txtColor='#ffffff'
          bgco='#7484bf'
          link='/result'
          state= {{title: value}}
        />
      </Box>
    </div>
  )

}
