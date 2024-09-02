import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';
import { useContext,useState,useEffect,useNavigate } from 'react';
import Button from "./Button";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Questions_add = ({ initData, onSubmit }) => {
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
  

  const QuestionData = {
    title: {title},
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
            const resp = await axios.post(url +'/QuestionsAddPage',{title,createdDate},);
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
          <Form.Text text="muted">서술형 문제를 입력해주세요</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Link to='/QuestionBankHome'>
        <Button
          onClick={onSubmitQuestion}
          text={"작성완료"}
        ></Button></Link>
      </Form>
    )
  }


export default Questions_add
