import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

function TestedUser() {
  return (
  <form>
    <Card style={{ width: '555px' }}>
      <Card.Body>
        <Card.Title >문제 </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">(5점)</Card.Subtitle>
        <Card.Text>
          1.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
         <Card.Text>
          2.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
          <Card.Text>
          3.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
          <Card.Text>
          4.Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <input type="Tested" placeholder="정답 입력"></input>
      </Card.Body>
    </Card>
    <Button type="submit"  style={{marginTop : 10}}>시험지 제출</Button>{' '}
    <Button href="#"  style={{marginTop : 10}}>시험 점수 목록으로</Button> 
    </form>
        
      
  );
}

export default TestedUser;