import CheckboxDN from "../../modules/checkboxDN/checkboxDN";
import Parallax from "../../modules/parallax/parallax";
import Comand from "../comand/comand";
import Contact from "../contact/contct";
import Portfolio from "../portfolio/porfolio";
import Skils from "../skills/skills";


function About() {

    return (
      <div className="about">
        <CheckboxDN/>
        <Parallax/>
        <Skils/>
        <Comand/>
        <Portfolio/>
        <Contact/>
      </div>
    );
  }
  
export default About;
  