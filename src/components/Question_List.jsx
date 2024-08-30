import { useNavigate } from "react-router-dom";
import Button from "./Button";




const Question_List = ({ id, Title, choice1,choice2,choice3,choice4, answer,createdDate }) => {
    const nav = useNavigate();
  
    const goQuestionPage = () => {
      nav(`/Question_view/${id}`);
    };
  
    const goEditPage = () => {
      nav(`/Question_edit/${id}`);
    };
  
    return (
      <div className="Question_list">
        
        <div onClick={goQuestionPage} className="info_section">
         
          <div className="Title">{Title}</div>
          <div className="choice1">{choice1}</div>
          <div className="choice2">{choice2}</div>
          <div className="choice3">{choice3}</div>
          <div className="choice4">{choice4}</div>
          <div className="answer">{answer}</div>
          <div className="created_date">
            {new Date(createdDate).toLocaleDateString()}
          </div>
          
        </div>
        <div className="button_section">
          <Button onClick={goEditPage} text={"수정하기"} />
        </div>
      </div>
    );
  };
  
  export default Question_List;