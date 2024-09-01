import "./App.css";
import {
  useReducer,
  useRef,
  createContext,
  useEffect,
  useState,
} from "react";
import { Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound";
import Question_add from "./pages/Question_add";
import Question_list from "./pages/Question_list";
import Tested from "./pages/Tested";
import TestedInfo from "./pages/TestedInfo";
import QuestionBankHome from "./pages/QuestionBankHome";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestDto from "./pages/TestDto";
import axios from "axios";
import Question_Edit from "./pages/Question_Edit";


async function reducer(state, action) {
  let nextState;

  const url = "http://localhost:8080"

  switch (action.type) {
    case "INIT":
      return action.data;
  case "CREATE": {
      nextState = [action.data,...state];
   
          
            break;
      }
    
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id)
          ? action.data
          : item
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter(
        (item) => String(item.id) !== String(action.id)
      );
      break;
    }
    default:
      return state;
  }


  localStorage.setItem("Question", JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  useEffect(() => {
    const storedData = localStorage.getItem("Question");
    if (!storedData) {
      setIsLoading(false);
      return;
    }

    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = item.id;
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  // 새로운 일기 추가
  const onCreate = (title,choice1,choice2,choice3,choice4,answer,createdDate) => {
    dispatch({
      type: "CREATE",
      data: {
        title,
        choice1,
        choice2,
        choice3,
        choice4,
        answer,
        createdDate,
       
      },
    });
  };

  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  if (isLoading) {
    return <div>데이터 로딩중입니다 ...</div>;
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/QuestionBankHome" element={<QuestionBankHome />} />
            <Route path="/TestDto" element={<TestDto />} />
            <Route path="/Question_add" element={<Question_add />} />
            <Route path="/Question_list" element={<Question_list />} />
            <Route path="/Question_Edit/:uuid" element={<Question_Edit />} />
            <Route path="/Tested" element={<Tested />} />
            <Route path="/TestedInfo" element={<TestedInfo />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
