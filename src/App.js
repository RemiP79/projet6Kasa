import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home";
import About from "./pages/About";
import Description from "./pages/Description";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router> 
      <Header />     
      <Routes>
        <Route exact path="/" element={<Home />} />        
        <Route path="/about" element={<About />} />
        <Route path="/description/:id" element={<Description />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>  
      <Footer />   
    </Router>
  );
}

export default App;