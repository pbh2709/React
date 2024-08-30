
import React, { Component } from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';
import Alert from 'react-bootstrap/Alert';

export default class Hello extends Component {
  render() {
    return (
      <Jumbotron>
        <Display4>문제 은행!</Display4>
        <Lead>여러가지 분야에서 상식 문제를 출제하였습니다.</Lead>
        <hr className="my-4" />
        <p>시험을 보고 다른 사용자와 점수를 비교해 볼 수 도 있습니다. 고득점에 도전하세요!</p>
        <Button primary lg>
        <Alert.Link href="/Tested"> 
        시험 보기
        </Alert.Link>
        </Button>
      </Jumbotron>
    )
  }
}

