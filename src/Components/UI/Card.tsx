import "./Card.css";

/**
 * @param props
 * TODO: Fix typing
 */

const Card = (props: any) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
