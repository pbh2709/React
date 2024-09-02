import { Form } from "bootstrap-4-react/lib/components"
import { useState ,useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "./Button";



function Questions_edit () {


    const [title, settitle] = useState('');
  
    const QuestionData = {
      title: {title},
   
      createDate: new Date().getDate().toLocaleString
    };
    const {uuid} = useParams();

    const params =useParams().uuid
    console.log(uuid)

    const [QuestionList , SetQuestionList] = useState({
        uuid: 0,
        title: '',
    });


    //한번만 렌더링 하도록 이펙트 씀 
        useEffect(()=> {
            axios.get(`http://localhost:8080/Questions_Edit/${params}`)
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
                    const resp = await axios.post(`http://localhost:8080/Questions_Edit/${params}`,{title,createdDate},);
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
            <label htmlFor="exampleInputEmail1">서술형 문제</label>
            <Form.Input type="text" id="title"  value={title} name="title" text={ QuestionList.title} 
           onChange={(e) =>settitle(e.target.value)} placeholder="문제 입력" >
         
           </Form.Input>
            <Form.Text text="muted">서술형 문제를 변경해주세요</Form.Text>
          </Form.Group>
          <Link to='/Questions_List'>
          <Button
            onClick={onSubmitQuestion}
            text={"작성완료"}
            
          /></Link>
        </Form>
      )
}
export default Questions_edit