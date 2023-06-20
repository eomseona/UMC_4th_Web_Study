import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Checkbox,
  Modal,
  TextField,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import { increaseCount, addproduct, deleteproduct, checkproduct } from './store/todoStore.js';
import axios from 'axios';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(0);
  const [contentsName, setContentsName] = useState('');
  const [contentsP, setContentsP] = useState('');
  const [temp, setTemp] = useState(0);
  const [humi, setHumi] = useState(0);

  const check = (e, i) => {
    if (e.target.checked) {
      dispatch(checkproduct(i));
    } else {
      dispatch(checkproduct(i));
    }
  };

  const getWeather = async () => {
    const today = new Date();
    const year = today.getFullYear(); // 년도
    const month = today.getMonth() + 1; // 월
    const date = today.getDate(); // 날짜
    const hours = today.getHours(); // 시

    try {
      const response = await axios.get('http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst', {
        params: {
          serviceKey: 'ooi+36tQ9VaudYeSWymYHZ7VETMmsZN9kZd/J2LPuqPJSm/dQ/Akv+LwffaudB8wnf415gT3zKl1cfaM4eOB1w==',
          pageNo: '1',
          numOfRows: '20',
          dataType: 'JSON',
          base_date: `${year}0${month}${date}`,
          base_time: `${hours - 1}00`,
          nx: '60',
          ny: '125',
        },
      });
      const data = response.data;
      console.log(data);
      setTemp(data.response.body.items.item[3].obsrValue);
      setHumi(data.response.body.items.item[1].obsrValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <Container>
      {state.contents.map((a, i) => (
        <Grid container spacing={2} key={i}>
          <Grid item xs={8}>
            <Typography
              variant="h6"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setTitle(i);
                setModal(true);
              }}
              className={state.contents[i].completed ? 'completed' : ''}
            >
              {state.contents[i].name}
              <Checkbox onClick={(e) => check(e, i)} />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="outlined"
              onClick={() => {
                if (title === state.contents.length - 1) {
                  if (i === 0) {
                    setModal(false);
                  } else {
                    setTitle(i - 1);
                  }
                }
                dispatch(deleteproduct(state.contents[i].id));
              }}
            >
              삭제
            </Button>
          </Grid>
        </Grid>
      ))}

      <Modal open={modal} onClose={() => setModal(false)}>
        <div className={state.contents[title]?.completed ? 'modal completed' : 'modal'}>
          <Typography variant="h4">{state.contents[title]?.name}</Typography>/*선택적체이닝 */
          <Typography>{state.contents[title]?.날짜}</Typography>
          <Typography>{state.contents[title]?.p}</Typography>
        </div>
      </Modal>

      <Typography variant="body1">현재 날씨: 기온: {temp}°C 습도: {humi}%</Typography>

      <TextField
        label="할 일"
        variant="outlined"
        value={contentsName}
        onChange={(e) => setContentsName(e.target.value)}
      />

      <TextField
        label="상세 내용"
        variant="outlined"
        multiline
        value={contentsP}
        onChange={(e) => setContentsP(e.target.value)}
      />

      <Button
        variant="contained"
        onClick={() =>
          dispatch(
            addproduct({
              id: state.contents.length + 1,
              name: contentsName,
              p: contentsP,
              날짜: Date(),
              completed: false,
            })
          )
        }
      >
        추가
      </Button>
    </Container>
  );
}

export default App;
