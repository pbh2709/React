import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form } from 'bootstrap-4-react';



const TestedUser  =()=>{

  const[Question ,SetQuestion] = useState(['testuuid']);
  const[Questions ,SetQuestions] = useState(['testuuid']);
  const [count,setCount] =useState(0);
  const [name, setname] = useState('');
  const uuidRef = React.useRef();
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answer5, setAnswer5] = useState('');
  const [testUuid, settestUuid] = useState('');
  const [answers,setanswers]=useState([]);
  
const [Answers ,setAnswers] = useState([answer1,answer2,answer3,answer4,answer5])


  useEffect(()=> {
    axios.get('http://localhost:8080/TestingQuestion',
    ).then(res=>{
            // 스프링으로부터 받아온 list를 Question에 넣기
            SetQuestion(res.data);
            console.log("성공")
            console.log("len: "+res.data.length); // 이걸 여기서 출력(확인)후 
        })
 
        axios.get('http://localhost:8080/TestingQuestions',
        ).then(res=>{
                // 스프링으로부터 받아온 list를 Question에 넣기
                SetQuestions(res.data);
                console.log("성공")
                console.log("len: "+res.data.length); // 이걸 여기서 출력(확인)후 
            })
            axios.get('http://localhost:8080/Testing', {
              withCredentials: true
            }); 
              },[]
  )

       axios.create({
    baseURL: '/Testing',
    withCredentials: true, // 이 부분 추가
  });
  //
  // settestUuid(tuuid)

    const onSubmitQuestion =async(e) =>{
      e.preventDefault()
      console.log("시작")
       settestUuid(e.target.value) 
      const uuid = uuidRef.current.value
      console.log(uuid)
      try{
        const createdDate = new Date().getTime().toLocaleString;
          const resp = await axios.post('http://localhost:8080/Score',{name,count,answer1,answer2,answer3,answers,uuid});
          console.log(resp.data);
          console.log("성공")         
      }catch(error) {
          console.log(error.response);
          console.log("실패")
      }
      };

      const onClickUuid = ()=>{

        
        console.log(Question.testUuid)
        settestUuid(Question.testUuid)
      }

      
  return (
    
  <form>
    <Card style={{ width: '555px' }}>
      <Card.Body>
      <input type="name"  value={name} onChange={(e)=>{setname(e.target.value)}}  placeholder="이름 입력"></input>
      {   
       
      
            Question.map(function(a,i){
              return(
                <>
        <Card.Title  key={a.testuuid}  style={{marginTop : 20}}>객관식{i+1}번{}{}{a.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">(5점)</Card.Subtitle>
        <Card.Text>
        ① {a.choice1}
        </Card.Text>
         <Card.Text>
         ②{a.choice2}
        </Card.Text>
          <Card.Text>
          ③{a.choice3}
        </Card.Text>
          <Card.Text>
          ④{a.choice4}
        </Card.Text>

        <Card.Text style={{display :'none'}}>
           setAnswer({a.answer})
           {/* <input type="name" style={{display :'none'}} value={} onBlur={()=>settestUuid(Question[i].testUuid)}  >{Question[i].testUuid}</input>v */}
        </Card.Text>
        {/* <input  name='answer1'  placeholder="1번 정답 입력" onChange={(e) =>setAnswer1(e.target.value)} value={Answer[i]}   ></input> */}
           </> 
           )})
           
              }
             <input  name='answer1'  placeholder="1번 정답 입력" onChange={(e) =>setAnswer1(e.target.value)} value={answer1}   ></input>
             <input  name='answer2'  placeholder="2번 정답 입력" onChange={(e) =>setAnswer2(e.target.value)} value={answer2}   ></input>
             <input  name='answer3'  placeholder="3번 정답 입력" onChange={(e) =>setAnswer3(e.target.value)}  value={answer3}  ></input>
             <input  name='answer4'  placeholder="4번 정답 입력" onChange={(e) =>setAnswer4(e.target.value)}  value={answer4}  ></input>
             <input  name='answer5'  placeholder="5번 정답 입력" onChange={(e) =>setAnswer5(e.target.value)}  value={answer5} ></input>
             <input   name='tuuid' value={Question[0].testuuid} ref={uuidRef} ></input>


             
             
      </Card.Body>


      <Card.Body>
      {   
            Questions.map(function(a,i){
              return(
                <>
        <Card.Title  key={Questions[i].testuuid}  style={{marginTop : 20}}>서술형{i+1}번{}{}{Questions[i].title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">(추후채점)</Card.Subtitle>
  
        {/* <input  name='answer1'  placeholder="1번 정답 입력" onChange={(e) =>setAnswer1(e.target.value)} value={Answer[i]}   ></input> */}
           </> 
           )})
           
              }
             <textarea  style={{marginTop:30,
              width:300,
              height :200,
             }} name='answers'  placeholder="서술형 정답 입력" onChange={(e) =>setanswers(e.target.value)} value={answers}   ></textarea>
           
      </Card.Body>
    </Card>
    <Button type="submit"  style={{marginTop : 10,
                                  backgroundColor : 'white'
    }}   onClick={onSubmitQuestion}  
          ><Link to={"/QuestionBankHome"}>시험지 제출</Link></Button> 
    <Button href="#"  style={{marginTop : 10}}>시험 점수 목록으로</Button> 
    </form>
        
      
  );
}

 export default TestedUser




