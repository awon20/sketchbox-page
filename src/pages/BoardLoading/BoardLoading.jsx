import React from "react";
import CircleLoader from "../../components/CircleLoader/CircleLoader";
import "./BoardLoading.css"

export function BoardLoading() {
  return (
    <div className="container">
      <h1> TEXT </h1>
      <Grid>
        <CircleLoader />
      </Grid>
    </div>
  );
}

function Grid({ children }) {
  return (
    <div className="grid">
      <LoadingBox>{children}</LoadingBox>
    </div>
  );
}

function LoadingBox({ children }) {
  return React.Children.map(children, child => {
    return <div className="loading-box">{child}</div>;
  });
}