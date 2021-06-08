import "./Welcome.css";
import { SvgSketchBoxLogo } from "../../components";
import { Link } from "react-router-dom";


export function Welcome() {

  return (
    <div className="Welcome">
      <Link to="/boardloading" style={{ width: "8rem" }} className="btn btn-primary">
        <SvgSketchBoxLogo
          width={350}
          height={350}
        ></SvgSketchBoxLogo>
      </Link>
    </div>
  );
}
