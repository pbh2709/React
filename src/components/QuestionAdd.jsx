import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';
import { useContext,useState,useEffect,useNavigate } from 'react';
import Button from "./Button";
import axios from 'axios';

const QuestionAdd1 = ({ initData, onSubmit }) => {
  const [input, setInput] = useState({
   
    title : "",
    choice1 : "",
    choice2 : "",
    choice3 : "",
    choice4 : "",
    answer  : "",
    createdDate: new Date(),
    
  });

  // const nav = useNavigate();
  const [title, settitle] = useState('');
  const [choice1, setchoice1] = useState('');
  const [choice2, setchoice2] = useState('');
  const [choice3, setchoice3] = useState('');
  const [choice4, setchoice4] = useState('');
  const [answer, setanswer] = useState('');

  const QuestionData = {
    title: {title},
    choice1: {choice1},
    choice2: {choice2},
    choice3: {choice3},
    choice4: {choice4},
    answer : {answer},
    createDate: new Date().getDate().toLocaleString
  };


const url = "http://localhost:8080"


 
    
      useEffect(() => {
        if (initData) {
          setInput({
            ...initData,
            createdDate: new Date(Number(initData.createdDate)),
          });
            
          console.log("데이터들어옴")
        }
      }, [initData]);
    
      

      const onChangeInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "createdDate") {
          value = new Date(value);
        }
    
        setInput({
          ...input,
          [name]: value,
        });
      }
      const onSubmitButtonClick = () => {
           console.log("제출")
        onSubmit(input);
      };

      const onSubmitQuestion =async(e) =>{
        e.preventDefault()
        console.log("시작")
        try{
          const createdDate = new Date().getTime().toLocaleString;
            const resp = await axios.post(url +'/QuestionAddPage',{title,choice1,choice2,choice3,choice4,answer,createdDate},);
            console.log(resp.data);
            console.log("성공")
            
        }catch(error) {
            console.log(error.response);
            console.log("실패")
        }
       
        };
    

      
    return (
      <Form>
        <Form.Group>
          <label htmlFor="exampleInputEmail1">객관식 문제</label>
          <Form.Input type="text" id="title"  value={title} name="title"
         onChange={(e) =>settitle(e.target.value)} placeholder="문제 입력" />
          <Form.Text text="muted">객관식 문제를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 1번</label>
          <Form.Input type="text" id ="choice1" value= {choice1} name="choice1"
          onChange={(e) =>setchoice1(e.target.value)}  />
             <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 2번</label>
          <Form.Input type="choice2" value={choice2} name="choice2"
          onChange={(e) =>setchoice2(e.target.value)}  />
            <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 3번</label>
          <Form.Input type="choice3" value={choice3} name="choice3"
          onChange={(e) =>setchoice3(e.target.value)}/>
            <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 4번</label>
          <Form.Input type="choice4" value={choice4} name="choice4"
          onChange={(e) =>setchoice4(e.target.value)} />
            <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">정답</label>
          <Form.Input type="answer" value={answer} name="answer"
          onChange={(e) =>setanswer(e.target.value)}  />
            <Form.Text text="muted">    정답을 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Button
          onClick={onSubmitQuestion}
          text={"작성완료"}
        />
      </Form>
    )
  }


export default QuestionAdd1
