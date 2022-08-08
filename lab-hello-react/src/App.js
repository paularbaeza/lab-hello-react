import "./App.css";
import ironhackLogo from "../src/images/ironhack-logo-xs.png";
import menuTopImg from "../src/images/menu-top-xs.png";
import declarativeImg from "../src/images/icon1.png"
import componentsImg from "../src/images/icon2.png"
import singleWayImg from "../src/images/icon3.png"
import JSXImg from "../src/images/icon4.png"

function App() {
  return (
    <div className="App">
      <nav>
        <img src={ironhackLogo} alt="ironhack-logo" />
        <img src={menuTopImg} alt="menu-top" height="15px" />
      </nav>
      <div id="titletext">
        <div id="title">
          <h1>
            Say hello to
            <br /> ReactJS
          </h1>
          <div id="introduction">
            <p>
              You will learn how to use
              <br />
              the most popular frontend library,
              <br />
              and become a uper Ninja developer.
            </p>

            <button>Awesome!</button>
          </div>
        </div>
      </div>
      <div id="icons">
        <div className = "container">
        <img src={declarativeImg} alt="declarative logo" width="100px" />
          <h4>Declarative</h4>
          <p>React makest it <br /> painless to create <br /> interactive UIs.</p>
        </div>
        <div className = "container">
        <img src={componentsImg} alt="components logo" width="100px" />
          <h4>Components</h4>
          <p>Build encapsulated <br /> components thatbr <br /> manage their state.</p>
        </div>
        <div className = "container">
        <img src={singleWayImg} alt="Single way logo" width="100px" />
          <h4>Single-Way</h4>
          <p>A set of immutable <br /> values are passed to <br /> the component's.</p>
        </div>
        <div className = "container">
        <img src={JSXImg} alt="JSX logo" width="100px" />
          <h4>JSX</h4>
        <p>Statically-typed, <br/>designed to tun on <br /> modern browsers.</p>
        </div>
        
      </div>
    </div>
  );
}

export default App;
