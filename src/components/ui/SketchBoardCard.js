import classes from "./SketchBoardCard.module.css";

function SketchBoardCard(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default SketchBoardCard;
