import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function ListExample() {
  return (
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
        <tr>
          <td>1</td>
          <td>123</td>
          <td> 
            <label class="form-check-label">
                    선택지1
                </label>
                <br></br>
                <label class="form-check-label">
                    선택지2
                </label>
                <br></br>
                <label class="form-check-label">
                    선택지3
                </label>
                <br></br>
                <label class="form-check-label">
                    선택지4
                </label>
            </td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>
                <a href="@{/question_edit/__${question.uuid}__}" text="#{edit}" class="btn btn-outline-primary btn-sm">
                    수정
                </a>
                <a href="@{|/question_delete/${question.uuid}|}" text="#{delete}" class="btn btn-outline-danger btn-sm">
                    삭제
                </a>
            </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ListExample;