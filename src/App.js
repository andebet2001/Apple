import "./App.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Iphone from "./Pages/Iphone/Iphone";
import  Mac from './Pages/Mac/Mac';
import  Four04 from './Pages/Four04/Four04';
import productPage from "./Pages/ProductPage/ProductPage";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
  return (
    <Router>
      <Nav/>
      
     <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/iphones" exact component={Iphone} />
        <Route path="/iphones/:pid" exact component={productPage} />
        <Route path="/mac" exact component={Mac} />
        <Route path="/" component={Four04} />
      </Switch>
      <Footer/>

    </Router>
   
  );
}

export default App;
