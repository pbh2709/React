import { useState } from "react"; 
import axios from "axios";


const url = "http://localhost:8080"

const TestDataAdd = () =>{
    const [title, settitle] =useState('');
    const [choice1,setchoice1] =useState(''); 
    const [choice2,setchoice2] =useState(''); 
   
    

  

  

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
    )
}

export default TestDataAdd 