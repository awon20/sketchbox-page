import React, { useState } from "react";
//import { Link } from "react-router-dom";

import classes from "./Layout.module.css";
import { ReactComponent as SketchBoxLogo } from "../../resources/logo/SketchBoxLogo.svg";

function Layout(staticContext, ...props) {
  const [isClicked, setClick] = useState(false);
  function handleClicked() {
    setClick(true);
    console.log({ isClicked });
  }
  return (
    <React.Fragment>
        <SketchBoxLogo
          onClick={handleClicked}
          width={350}
          className={classes.container}
        ></SketchBoxLogo>
      <main className={classes.body}>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
