import { useState ,useEffect} from "react"; 
import axios from "axios";
import { Table } from "bootstrap-4-react/lib/components";

const url = "http://localhost:8080"

const TestDataAdd = () =>{
    const [title, settitle] =useState('');
    const [choice1,setchoice1] =useState(''); 
    const [choice2,setchoice2] =useState(''); 
    const [TestList , SetTestList] = useState([]);


//한번만 렌더링 하도록 이펙트 씀 
    useEffect(()=> {
        axios.get('http://localhost:8080/TestDto')
            .then(res=>{
                // 스프링으로부터 받아온 list를 shopList에 넣기
                SetTestList(res.data);
                console.log("성공")
                console.log("len: "+res.data.length); // 이걸 여기서 출력(확인)후 RowItem에서 출력 예정이다.
            })
        },[])


    // useEffect(()=> {
    //   axios.get(url+'/TestDto').then((res)=>{
    //     SetList(res.data)
    //     console.log(res)
    //   })
    // },[])
  

  

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const resp = await axios.post(url+'/TestDto',{title,choice1,choice2},);
            console.log(resp.data);
        }catch(error) {
            console.log(error.response);
        }
        };
    
    
    
    return (
        <>
        <section>
            <h2 className="text-center">post request</h2>
            <form className="form" >
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        문제 제목
                    </label>
                    <input
                       type="text"
                       className="form-input"
                       id='title'
                       value={title}
                       onChange={(e) =>settitle(e.target.value)}
                       />
                </div>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        선택지1
                    </label>
                    <input
                       type="text"
                       className="form-input"
                       id='choice1'
                       value={choice1}
                       onChange={(e) =>setchoice1(e.target.value)}
                       />
                </div>
                <div className="form-row">
                    <label htmlFor="name" className="form-label">
                        선택지2
                    </label>
                    <input
                       type="text"
                       className="form-input"
                       id='choice2'
                       value={choice2}
                       onChange={(e) =>setchoice2(e.target.value)}
                       />
                </div>
                <button type="submit" onClick={handleSubmit}>문제 전송</button>
                
            </form>
        </section>
            <div className="App">

            <h1>List</h1>
            {
              TestList.map(function(a,i){
                return(
                  <div>
                  <div>{TestList[i].id}</div>
                  <div>{TestList[i].title}</div>
                  <div>{TestList[i].choice1}</div>
                  <div>{TestList[i].choice2}</div>
                  <div>{TestList[i].choice3}</div>
                  <div>{TestList[i].choice4}</div>
                  </div>
                )
              })
            }
      
            
          </div>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
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
                  <td>{TestList[i].id}</td>
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
                  <td>수정/삭제</td>
                  </tr>
                )
              })
            }
      
       
      </tbody>
    </Table>
            </>
    )
}

export default TestDataAdd 