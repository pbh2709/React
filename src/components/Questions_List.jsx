import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'bootstrap-4-react/lib/components';
import Button from './Button';

const Questions_List = ()=>{


  const [TestList , SetTestList] = useState([]);


  //한번만 렌더링 하도록 이펙트 씀 
      useEffect(()=> {
          axios.get('http://localhost:8080/Questions')
              .then(res=>{
                  // 스프링으로부터 받아온 list를 TestList에 넣기
                  SetTestList(res.data);
                  console.log("성공")
                  console.log("len: "+res.data.length); // 이걸 여기서 출력(확인)후 RowItem에서 출력 예정이다.
              })
          },[])

         
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>문제</th>
        <th>출제일</th>
        <th>수정/삭제</th>
      </tr>
    </thead>
    <tbody>
     
      {
            TestList.map(function(a,i){
              return(
                  <tr>
                <td>{TestList[i].title}</td>
                <td>{TestList[i].createdAt}</td>
                <td> <Link
          to={{
            pathname: `/Questions_Edit/${TestList[i].uuid}`,
            search: "?isForEdit=true",
            state: {
              uuid: TestList[i].uuid,
            
            },
          }}
        >
          <button type="primary" text={"수정"}>수정</button>
        </Link>
/<button onClick={()=>{
            axios.get(`http://localhost:8080/QuestionsDelete?uuid=${TestList[i].uuid}`).then(() => {alert('삭제완료');}).catch((error) => {console.log(error)})
           
            window.location.href ="/QuestionBankHOme";
        }}>삭제</button> </td>
                </tr>
              )
            })
          }
    
     
    </tbody>
  </Table>
  );
}

export default Questions_List;