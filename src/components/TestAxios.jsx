import axios from 'axios';

function selectData(){
  axios.post('/testData',["가","나","다"])
    .then(function (res){
        console.log(res)
    });
}

function TestAxios() {

    return (
        <div className="App">
            <header className="App-header">
                <div>
                   <button onClick={() =>selectData()}>조회</button>
                </div>
            </header>
        </div>
    );
}

export default TestAxios