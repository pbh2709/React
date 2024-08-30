import NavBar from "../components/NavBar";
import ListExample from "../components/QuestionList";
import Question_List from "../components/Question_List";


const Question_list = ()=>{

    return(
        <div>
            <NavBar></NavBar>
            <ListExample></ListExample>
            <Question_List></Question_List>
           
        </div>
    );
}

export default Question_list