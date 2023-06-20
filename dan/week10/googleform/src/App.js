import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
 background-color:#f0ebf8;
 display:flex;
 justify-content:center;
form{
  width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:20px;
}
 `;

const FormGroup = styled.div`
margin-bottom: 16px;
width: 500px;
height: 100px;
background-color: white;
border-radius: 10px;
`;

const Label = styled.label`
display: block;
margin: 8px 20px;
}
`;

const Input = styled.input`
  width: 80%;
  padding: 8px;
  border-radius: 4px;
  margin-left:20px;
  background-color: transparent;
  border: none;
  display: block;
  font: 400 16px Roboto,RobotoDraft,Helvetica,Arial,sans-serif;
  min-width: 0%;
  outline: none;
  padding: 0.125em 0;
  z-index: 0;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const Line = styled.div`
  width:80%;
  color: rgb(32,33,36);
  height: 1px;
 background-color:rgba(0,0,0,.2);
  margin-left:16px;
}
`
const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    alert(`제출완료\n이름: ${data.name}\n이메일: ${data.email}\n주소: ${data.address}\n`)
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label htmlFor="name">이름</Label>
          <Input type="text" id="name" {...register('name')} />
          <Line />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">이메일</Label>
          <Input type="email" id="email" {...register('email')} />
          <Line />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="address">주소</Label>
          <Input type="text" id="address" {...register('address')} />
          <Line />
        </FormGroup>
        <Button type="submit">제출</Button>
      </form>
    </FormContainer>
  );
};

export default App;