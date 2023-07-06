import { Route, Routes } from "react-router-dom";
import About from "./about/about";
import Error404 from "./error404/error404";

function Pages() {
    return (
      <div className="pages">
       <Routes>
            <Route path="/" element={<About/>}/>
            <Route path="/portfolio" element={<Error404/>}/>
            <Route path="*" element={<Error404/>}/>
       </Routes>
      </div>
    );
  }
  
export default Pages;
  