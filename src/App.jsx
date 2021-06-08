// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import { useState, useEffect } from "react";

import "./App.css";
import { BoardLoading, NewSketchBoard, Welcome } from "./pages";



function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    console.log("render");
  });

    if (isLoading) {
      return (
        <section>
          <p> Loading...</p>
        </section>
      );
    }
    return (
      <Switch>
        <Route exact path="/">
          <Welcome onClick={() => setIsLoading(true)} />
        </Route>
        <Route  path="/boardloading">
          <BoardLoading />
        </Route>
        <Route  path="/new-sketchboard">
          <NewSketchBoard />
        </Route>
      </Switch>
    );
}

export default App;
