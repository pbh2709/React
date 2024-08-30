
import NavBar from "../components/NavBar";
import QuestionAdd1 from "../components/QuestionAdd";
import { NavLink } from "react-router-dom";
import { useContext,useState } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";



const Question_add = ()=>{

    const { onCreate } = useContext(DiaryDispatchContext);
    const nav = useNavigate();

    // const [input, setInput] = useState({
     
    //   Title : "",
    //   choice1: "",
    //   choice2: "",
    //   choice3: "",
    //   choice4: "",
    //   answer: "",
    //   createdDate: "",
    // });

  
    const onSubmit = (input) => {
      onCreate(
        input.Title ,
        input.choice1,
        input.choice2,
        input.choice3,
        input.choice4,
        input.answer,
        input.createdDate.getTime(),
    
      );
      console.log("생성")
      nav("/QuestionBankHome", { replace: true });
    };
   
    return(

        <div>
          <NavBar></NavBar>
          <QuestionAdd1 onSubmit={onSubmit} ></QuestionAdd1>
        </div>
           
       
        
    );
}

export default Question_add