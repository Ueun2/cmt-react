import React, { useState, useEffect } from 'react';
import { Button, TextField, ButtonGroup, colors } from '@mui/material';
import { Box, ThemeProvider, createTheme, styled } from '@mui/system';
import RoundBtn from '../components/button/Round'
import axios from 'axios';
export default function () {
  const keywords = ['반도체', '영업이익', '상한가', '자동차'] // 키워드 목록
  const [title, setTitle] = useState('') // 뉴스 제목 초기값
  const [contents, setContents] = useState('') // 뉴스 본문 초기값
  // TODO 1 : 뉴스 제목과 본문 입력 된 상태로 랜더링 

  return (
    <div className='layout'>


      <ButtonGroup
        variant="outlined"
        ria-label="outlined primary button group"
        sx={{
          display: 'block',
          textAlign: 'left',
          mt:10
        }}
      >
        {keywords.map((btn, idx) => (
          <Button
            key={idx}
            sx={{
              borderColor: '#7484bf',
              color:'#7484bf'
            }}
          >
            {btn}
          </Button>
        ))}
      </ButtonGroup>

      <Box
        sx={{
          border: 1,
          borderRadius: 3,
          my: 3,
          p: 3,
          borderColor: '#7484bf'
        }}
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          variant="standard"
          defaultValue={title}
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
            }
          }}

        />
        <TextField
          id="outlined-basic"
          defaultValue={contents}
          multiline
          fullWidth
          sx={{
            mt: 2,
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
        <RoundBtn
          link='/result'
          txt='결과 분석하기'
          txtColor='#ffffff'
          bgco='#7484bf'
        />
      </Box>
    </div>
  )
}
