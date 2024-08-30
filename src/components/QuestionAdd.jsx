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

  const [title, settitle] = useState('');





 
    
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
            const resp = await axios.post('/QuestionAddPage',{title},);
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
          <Form.Input type="choice1" value={input.choice1} name="choice1"
          onChange={onChangeInput}  />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 2번</label>
          <Form.Input type="choice2" value={input.choice2} name="choice2"
          onChange={onChangeInput}  />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 3번</label>
          <Form.Input type="choice3" value={input.choice3} name="choice3"
          onChange={onChangeInput}/>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">선택지 4번</label>
          <Form.Input type="choice4" value={input.choice4} name="choice4"
          onChange={onChangeInput} />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">정답</label>
          <Form.Input type="answer" value={input.answer} name="answer"
          onChange={onChangeInput}  />
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
