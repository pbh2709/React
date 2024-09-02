import { Form } from "bootstrap-4-react/lib/components"
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "./Button";



function Question_edit () {


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
    const {uuid} = useParams();

    const params =useParams().uuid
    console.log(uuid)

    const [QuestionList , SetQuestionList] = useState({
        uuid: 0,
        title: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        answer : ''
    });


    //한번만 렌더링 하도록 이펙트 씀 
        useEffect(()=> {
            axios.get(`http://localhost:8080/Question_Edit/${params}`)
                .then(res=>{
                    // 스프링으로부터 받아온 list를 QuestionList에 넣기
                    SetQuestionList(res.data);
                    console.log("성공")
                    console.log("len: "+res.data); // 이걸 여기서 출력(확인)후 RowItem에서 출력 예정이다.
                })
            },[params])

            const onSubmitQuestion =async(e) =>{
                e.preventDefault()
                console.log("시작")
                try{
                  const createdDate = new Date().getTime().toLocaleString;
                    const resp = await axios.post(`http://localhost:8080/Question_Edit/${params}`,{title,choice1,choice2,choice3,choice4,answer,createdDate},);
                    console.log(resp.data);
                    console.log("성공")
                    
                }catch(error) {
                    console.log(error.response);
                    console.log("실패")
                }
               
                };
  
              
    return (

      QuestionList.map(function(a,i){


        return(
        <Form>
          <Form.Group>
            <label htmlFor="exampleInputEmail1">객관식 문제</label>
            <Form.Input type="text" id="title"  defaultvalue={QuestionList.title} name="title" Text={ QuestionList.title} 
           onChange={(e) =>settitle(e.target.value)} placeholder="문제 입력" >
         
           </Form.Input>
            <Form.Text text="muted">객관식 문제를 입력해주세요</Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">선택지 1번</label>
            <Form.Input type={QuestionList.title} id ="choice1" value= {choice1} name="choice1" text={ QuestionList.choice1} 
            onChange={(e) =>setchoice1(e.target.value)} placeholder="선택지 입력" >
            </Form.Input>
               <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">선택지 2번</label>
            <Form.Input type="choice2" value={choice2} name="choice2" text={ QuestionList.choice2} 
            onChange={(e) =>setchoice2(e.target.value)}  placeholder="선택지 입력" >
                 
            </Form.Input>
              <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">선택지 3번</label>
            <Form.Input type="choice3" value={choice3} name="choice3" text={ QuestionList.choice3} 
            onChange={(e) =>setchoice3(e.target.value)} placeholder="선택지 입력" >
                 
            </Form.Input>
              <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">선택지 4번</label>
            <Form.Input type="choice4" value={choice4} name="choice4"
            onChange={(e) =>setchoice4(e.target.value)} placeholder={ QuestionList.choice4} text={ QuestionList.choice4}  >
             
            </Form.Input>
              <Form.Text text="muted">    선택지를 입력해주세요</Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword1">정답</label>
            <Form.Input type="answer" value={answer} name="answer"
            onChange={(e) =>setanswer(e.target.value)} text={ QuestionList.answer}  >
                 
            </Form.Input>
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
     ) }))
    }
  
export default Question_edit