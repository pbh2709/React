import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'bootstrap-4-react/lib/components';
import Button from './Button';


function ListExample() {

  const [TestList , SetTestList] = useState([]);


  //한번만 렌더링 하도록 이펙트 씀 
      useEffect(()=> {
          axios.get('http://localhost:8080/TestDto')
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
        <th>선택지</th>
        <th>정답</th>
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
                <td>
              <label class="form-check-label">
                ① {TestList[i].choice1}
              </label>
              <br></br>
              <label class="form-check-label">
                ②{TestList[i].choice2}
              </label>
              <br></br>
              <label class="form-check-label">
               ③{TestList[i].choice3}
              </label>
              <br></br>
              <label class="form-check-label">
              ④{TestList[i].choice4}
              </label>
              </td>
                <td>{TestList[i].answer}</td>
                <td>{TestList[i].createdAt}</td>
                <td> <Link
          to={{
            pathname: `/Question_Edit/${TestList[i].uuid}`,
            search: "?isForEdit=true",
            state: {
              uuid: TestList[i].uuid,
            
            },
          }}
        >
          <Button type="primary">수정</Button>
        </Link>
/<button onClick={()=>{
            axios.get(`http://localhost:8080/QuestionDelete?uuid=${TestList[i].uuid}`).then(() => {alert('삭제완료');}).catch((error) => {console.log(error)})
           
            // window.location.href ="/QuestionBankHOme";
        }}>삭제</button> </td>
                </tr>
              )
            })
          }
    
     
    </tbody>
  </Table>
  );
}

export default ListExample;