
import './App.css';

function App() {
  return (
      <div className="container">
        <div className="pages">
          <div className="page">
            <div className="input">
              <div className="title">USERNAME</div>
              <input className="text" type="text" placeholder=""/>
            </div>
            <div className="input">
              <div className="title">PASSWORD</div>
              <input className="text" type="password" placeholder=""/>
            </div>
            <div className="input">
              <input type="submit" value="ENTER"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
