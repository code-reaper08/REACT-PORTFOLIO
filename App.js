import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Socials from "./components/Socials";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Router>
       <Navbar />
       <Switch>
       <Route path="/" exact component={() => <Home />} />
       <Route path="/socials" exact component={() => <Socials />} />
       <Route path="/Skills" exact component={() => <Skills />} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
