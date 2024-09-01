import { useEffect ,useState} from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


    function TestedInfoList() {

        const [TestInfoList , SetTestInfoList] = useState([]);
      
      
        //한번만 렌더링 하도록 이펙트 씀 
            useEffect(()=> {
                axios.get('http://localhost:8080/TestInfo')
                    .then(res=>{
                        // 스프링으로부터 받아온 list를 TestList에 넣기
                        SetTestInfoList(res.data);
                        console.log("성공")
                        console.log("len: "+res.data.length); // 이걸 여기서 출력(확인)후 RowItem에서 출력 예정이다.
                    })
                },[])
      
               
        return (
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>이름</th>
              <th>재시험</th>
              <th>점수</th>
              <th>객관식 정답 수</th>
              <th>객관식 점수</th>
              <th>서술형 채점 여부</th>
            
            </tr>
          </thead>
          <tbody>
           
            {
                  TestInfoList.map(function(a,i){
                    return(
                        <tr>
                      <td>{TestInfoList[i].userName}</td>
                      <td> {TestInfoList[i].retest}</td>
                      <td>{TestInfoList[i].scoreTotal}</td> 
                     <td>{TestInfoList[i].correctAnswerCount}</td>
                    <td>{TestInfoList[i].questionCount}</td>
                    <td>{TestInfoList[i].grading}</td>
                     
                      <td> <Link to={`/TestView/uuid=${TestInfoList[i].uuid}`}> 시험지보기</Link></td>
                      </tr>
                    )
                  })
                }
          
           
          </tbody>
        </Table>
        );
      }
    
export default TestedInfoList