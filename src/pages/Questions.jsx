
import NavBar from "../components/NavBar";
import Questions_add from "../components/Questions_add";
import { NavLink } from "react-router-dom";
import { useContext,useState } from "react";
import { DiaryDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";



const Questions = ()=>{

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
        input.answer,
        input.createdDate.getTime(),
    
      );
      console.log("생성")
      nav("/QuestionBankHome", { replace: true });
    };
   
    return(

        <div>
          <NavBar></NavBar>
          <Questions_add onSubmit={onSubmit} ></Questions_add>
        </div>
           
       
        
    );
}

export default Questions