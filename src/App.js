// import logo from './logo.svg';
import './App.css';
// import WelcomeToFSD from "./WelcomeToFSD";

import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Assignment7 from "./labs/a7";

// import Mid from "./labs/mid"

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <WelcomeToFSD/>
//         <h3>Assignment Part Something</h3>
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React hehe
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
      <BrowserRouter>
      <div className="container">

          <Routes>
              {/*<Route index // path="/labs" // removed the path and replaced that with index*/}
              <Route path="/*"
                     element={<Labs/>}/>
              <Route path="/hello"
                     element={<HelloWorld/>}/>
              <Route path="/tuiter"
                     element={<Tuiter/>}/>
              <Route path="/a7"
                     element={<Assignment7/>}/>
          {/*    remove after mid*/}
          {/*    <Route path="/mid"*/}
          {/*           element={<Mid/>}/>*/}
          </Routes>

      </div>
      </BrowserRouter>

  );
}
export default App;
