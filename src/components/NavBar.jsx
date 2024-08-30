import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Alert from 'react-bootstrap/Alert';
import "./NavBar.css";

function NavBar() {
  const handleSelect = (eventKey) => alert(` ${eventKey}`);

  document.getElementById('currentDateTime');
  var date = new Date();
  var weekLabel = new Array('일', '월', '화', '수', '목', '금', '토');
  var week = date.getDay();
  var currentDateTime = date.getFullYear()
      + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
      + '-' + ('0' + date.getDate()).slice(-2)
      + ' (' + weekLabel[week] + ')';
    

  return (<>
    <Nav variant="pills" id='Nav' activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="홈화면으로" href="/QuestionBankHome">
        <Alert.Link href="/QuestionBankHome"> Home</Alert.Link>  
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="문제 목록으로" href="/Question_list">
        <Alert.Link href="/Question_list"> 문제 목록</Alert.Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="시험을 응시합니다. " href="/Tested">
        <Alert.Link href="/Tested"> 시험 응시</Alert.Link>
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="문제 출제" id="nav-dropdown">
        <NavDropdown.Item eventKey="객관식 문제를 출제합니다. " href="Question_add">
        <Alert.Link href="/Question_add"> 
        객관식 문제 출제 
        </Alert.Link>
          </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          Another action
          </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">
          Something else here
          </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">
          Separated link
          </NavDropdown.Item>
      </NavDropdown>
     
    </Nav>
    <span>&nbsp;</span>
    <span className="currentDateTime" id="currentDateTime" >{currentDateTime}</span>
   
    </>
  );
}

export default NavBar;