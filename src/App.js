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
