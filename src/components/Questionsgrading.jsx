import { useEffect ,useState} from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


    function Questionsgrading() {

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
              <th>서술형 채점 여부</th>
              <th>서술형 점수</th>
              <th>채점</th>
            </tr>
          </thead>
          <tbody>
           
            {
                  TestInfoList.map(function(a,i){
                    return(
                        <tr>
                      <td>{TestInfoList[i].userName}</td>
                    <td>{TestInfoList[i].grading}</td>
                    <td>{TestInfoList[i].correctsAnswerScore}</td>
                      <td> <Link to={`/Questionsgrade/uuid3=${TestInfoList[i].uuid3}`}> 서술형 채점</Link></td>
                      </tr>
                    )
                  })
                }
          
           
          </tbody>
        </Table>
        );
      }
    
export default Questionsgrading